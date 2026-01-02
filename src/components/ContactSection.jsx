import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your actual EmailJS credentials
    // Sign up at https://www.emailjs.com/
    const SERVICE_ID = "service_g5m4egs";
    const ADMIN_TEMPLATE_ID = "template_52kj8t4"; // Notification to You
    const AUTOREPLY_TEMPLATE_ID = "template_ithjv9g"; // Auto-reply to Sender
    const PUBLIC_KEY = "b1TjDlDqaW8tyUmBQ";

    // Send both emails simultaneously
    Promise.all([
      emailjs.sendForm(SERVICE_ID, ADMIN_TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      }),
      emailjs.sendForm(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      }),
    ])
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Success! Check your email for a confirmation.",
          });
          e.target.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          toast({
            variant: "destructive",
            title: "Error sending message",
            description:
              error.text || JSON.stringify(error) || "Check console for details.",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const contactItems = [
    {
      Icon: Mail,
      title: "Email",
      value: "abhiramtamarapalli2@gmail.com",
      href: "mailto:abhiramtamarapalli2@gmail.com"
    },
    {
      Icon: Phone,
      title: "Phone",
      value: "+91 9392640161",
      href: "tel:+919392640161"
    },
    {
      Icon: MapPin,
      title: "Location",
      value: "Kakinada, Andhra Pradesh, India",
      href: null
    }
  ];

  const socialLinks = [
    { Icon: Linkedin, href: "https://www.linkedin.com/in/abhiram-tamarapalli-6a8177330", label: "LinkedIn" },
    { Icon: Github, href: "https://github.com/abhiram-tamarapalli2", label: "GitHub" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <motion.section
      id="contact"
      className="py-10 px-4 relative bg-secondary/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          variants={itemVariants}
        >
          Get In <span className="text-primary"> Touch</span>
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Have a project in mind or want to collaborate on AI/ML solutions? Feel free to reach out.
          I&apos;m always open to discussing new opportunities in Cloud Computing and AI.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h3
              className="text-xl font-semibold mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact Information
            </motion.h3>

            <div className="space-y-4 justify-center">
              {contactItems.map(({ Icon, title, value, href }, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="p-2.5 rounded-full bg-primary/10"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="h-5 w-5 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="font-medium text-sm">{title}</h4>
                    {href ? (
                      <motion.a
                        href={href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {value}
                      </motion.a>
                    ) : (
                      <span className="text-muted-foreground text-sm">{value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div className="pt-6" variants={itemVariants}>
              <h4 className="font-medium mb-3 text-sm">Connect With Me</h4>
              <div className="flex space-x-3 justify-center">
                {socialLinks.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-card p-6 rounded-lg shadow-xs"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3
              className="text-xl font-semibold mb-4"
              whileHover={{ color: "rgb(var(--primary))" }}
            >
              Send a Message
            </motion.h3>

            <form className="space-y-4" ref={formRef} onSubmit={handleSubmit}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <label
                  htmlFor="user_name"
                  className="block text-xs font-medium mb-1.5"
                >
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="w-full px-3 py-2.5 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary text-sm"
                  placeholder="Abhiram Tamarapalli..."
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="user_email"
                  className="block text-xs font-medium mb-1.5"
                >
                  Your Email
                </label>
                <motion.input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="w-full px-3 py-2.5 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary text-sm"
                  placeholder="abhiramtamarapalli2@gmail.com"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="message"
                  className="block text-xs font-medium mb-1.5"
                >
                  Your Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2.5 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none text-sm"
                  placeholder="Hello, I&apos;d like to discuss AI/ML opportunities..."
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 text-sm"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <motion.div
                  animate={isSubmitting ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.5, repeat: isSubmitting ? Infinity : 0 }}
                >
                  <Send size={14} />
                </motion.div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
