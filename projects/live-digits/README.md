# Live Digits — ML Inference API

An educational adaptation of scikit-learn's handwritten digit classification example, extended with a local HTTP prediction service.

## Origin and credit

Original authors: **The scikit-learn developers**.
[Upstream example](https://github.com/scikit-learn/scikit-learn/blob/main/examples/classification/plot_digits_classification.py).
Original and adapted code use BSD-3-Clause; see [LICENSE.scikit-learn](LICENSE.scikit-learn).
This adaptation was prepared with AI assistance for Abhiram Tamarapalli's portfolio on November 3, 2026. It does not claim authorship of scikit-learn or its original example.

## Changes in this adaptation

- Converted the plotting tutorial into a runnable evaluation command and local inference API.
- Added a reproducible, stratified 75/25 train/test split with random seed 42.
- Added accuracy, macro F1, confusion matrix, sample counts and version reporting.
- Added JSON input validation, finite pixel checks and an 8 KB request limit.
- Added health and metrics endpoints.

## Run

Requires Python 3.11 or newer. From this directory:

```bash
python -m venv .venv
# Linux/macOS:
source .venv/bin/activate
# Windows PowerShell instead:
# .venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python app.py
python app.py --serve --port 8080
```

GET http://127.0.0.1:8080/health reports readiness.
GET http://127.0.0.1:8080/metrics returns evaluation results.
POST http://127.0.0.1:8080/predict accepts {"pixels": [64 numbers]}.

Try a prediction in a second terminal with the same environment:

```python
import json
from urllib.request import Request, urlopen
from sklearn.datasets import load_digits

pixels = load_digits().data[0].tolist()
request = Request(
    "http://127.0.0.1:8080/predict",
    data=json.dumps({"pixels": pixels}).encode(),
    headers={"Content-Type": "application/json"},
)
print(json.load(urlopen(request)))  # {"digit": 0}
```

## Validation performed

On scikit-learn 1.8.0: 1,347 training images, 450 test images, accuracy **98.89%**, macro F1 **0.9888**.
Checked health response, valid digit prediction, wrong pixel count, booleans, out-of-range values, NaN and non-object input. Invalid prediction inputs returned HTTP 400.

The dataset is scikit-learn's built-in **8×8 digits dataset**, not MNIST.
Pixels must be flattened row by row into 64 values ranging from 0 to 16 (0 is background). Arbitrary photographs need separate preprocessing and evaluation.

## Limitations and next steps

Local demonstration only: Python's built-in HTTP server is not a production hosting solution. No cloud deployment, authentication, rate limiting or latency benchmark is claimed. The held-out result describes this dataset and split; it does not establish performance on phone photos or handwriting from new users.

Future work: evaluate external handwriting, add a drawing interface, package a production API, and deploy with monitoring after security and load testing.
