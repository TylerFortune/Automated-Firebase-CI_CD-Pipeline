const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });
const axios = require("axios");

admin.initializeApp();

// Load environment variables (populated by CI/CD pipeline)
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET;

/**
 * Handles contact form submissions with reCAPTCHA verification.
 * This matches the 'contact form' logic referenced in the deployment pipeline.
 */
exports.sendmail = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== 'POST') {
      return res.status(405).send('Method Not Allowed');
    }

    const { name, email, message, captchaToken } = req.body;

    // 1. Verify reCAPTCHA
    try {
      const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${captchaToken}`;
      const captchaResponse = await axios.post(verifyUrl);
      
      if (!captchaResponse.data.success) {
        return res.status(400).json({ error: "Invalid reCAPTCHA token" });
      }
    } catch (error) {
      console.error("reCAPTCHA Verification Error:", error);
      // Proceeding for demo purposes if secret is missing in dev
      if (RECAPTCHA_SECRET) return res.status(500).send("Captcha verification failed");
    }

    // 2. Logic Placeholder (e.g., Save to Firestore or send notification)
    console.log("Contact form submission received:", { name, email, message });
    
    res.status(200).json({ success: true, message: "Message received successfully" });
  });
});