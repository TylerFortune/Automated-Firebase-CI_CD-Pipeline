const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });
const sgMail = require("@sendgrid/mail");
const axios = require("axios");

admin.initializeApp();

// Load environment variables (populated by CI/CD pipeline)
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET;

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

/**
 * Handles contact form submissions with reCAPTCHA verification and SendGrid email delivery.
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

    // 2. Send Email via SendGrid
    const msg = {
      to: 'admin@your-domain.com',
      from: 'no-reply@your-domain.com', 
      subject: `New Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Message:</strong><br>${message}`,
    };

    try {
      if (SENDGRID_API_KEY) {
        await sgMail.send(msg);
        console.log("Email sent successfully");
      } else {
        console.log("Simulating email send (No API Key):", msg);
      }
      res.status(200).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("SendGrid Error:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });
});
