"""Live digit classification, adapted from scikit-learn's digits example.
Original authors: The scikit-learn developers.
SPDX-License-Identifier: BSD-3-Clause
See LICENSE.scikit-learn for the retained upstream license.
Adaptation prepared with AI assistance for Abhiram Tamarapalli's portfolio.
"""
import argparse
import json
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

import numpy as np
from sklearn import datasets, metrics, svm
from sklearn.model_selection import train_test_split


def train():
    digits = datasets.load_digits()
    x_train, x_test, y_train, y_test = train_test_split(
        digits.data, digits.target, test_size=0.25,
        random_state=42, stratify=digits.target
    )
    model = svm.SVC(gamma=0.001)
    model.fit(x_train, y_train)
    predicted = model.predict(x_test)
    report = {
        "accuracy": metrics.accuracy_score(y_test, predicted),
        "macro_f1": metrics.f1_score(y_test, predicted, average="macro"),
        "train_samples": len(y_train),
        "test_samples": len(y_test),
        "sklearn_version": __import__("sklearn").__version__,
        "confusion_matrix": metrics.confusion_matrix(y_test, predicted).tolist(),
    }
    return model, report


def validate_pixels(payload):
    if not isinstance(payload, dict) or "pixels" not in payload:
        raise ValueError("Send a JSON object containing pixels.")
    values = payload["pixels"]
    if not isinstance(values, list) or len(values) != 64:
        raise ValueError("pixels must contain exactly 64 numbers.")
    if any(isinstance(v, bool) or not isinstance(v, (int, float)) for v in values):
        raise ValueError("Every pixel must be a number.")
    pixels = np.asarray(values, dtype=float)
    if not np.isfinite(pixels).all() or (pixels < 0).any() or (pixels > 16).any():
        raise ValueError("Pixels must be finite numbers from 0 to 16.")
    return pixels.reshape(1, 64)


def make_handler(model, report):
    class Handler(BaseHTTPRequestHandler):
        def reply(self, status, payload):
            body = json.dumps(payload, allow_nan=False).encode()
            self.send_response(status)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def do_GET(self):
            if self.path == "/health":
                self.reply(200, {"status": "ok", "model": "SVC", "input_pixels": 64})
            elif self.path == "/metrics":
                self.reply(200, report)
            else:
                self.reply(404, {"error": "Route not found."})

        def do_POST(self):
            if self.path != "/predict":
                self.reply(404, {"error": "Route not found."})
                return
            try:
                length = int(self.headers.get("Content-Length", "0"))
                if length <= 0 or length > 8192:
                    self.reply(413, {"error": "Body must be 1 to 8192 bytes."})
                    return
                payload = json.loads(self.rfile.read(length))
                pixels = validate_pixels(payload)
            except (ValueError, UnicodeDecodeError, OverflowError):
                self.reply(400, {"error": "Invalid JSON or pixels: use 64 finite numbers from 0 to 16."})
                return
            digit = int(model.predict(pixels)[0])
            self.reply(200, {"digit": digit})

    return Handler


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Evaluate or serve a digits classifier.")
    parser.add_argument("--serve", action="store_true")
    parser.add_argument("--port", type=int, default=8080)
    args = parser.parse_args()
    model, report = train()
    print(json.dumps(report, indent=2), flush=True)
    if args.serve:
        server = ThreadingHTTPServer(("127.0.0.1", args.port), make_handler(model, report))
        print(f"Local API: http://127.0.0.1:{args.port}", flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass
        finally:
            server.server_close()
