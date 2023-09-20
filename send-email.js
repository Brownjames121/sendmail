const nodemailer = require("nodemailer");
// const fs = require("fs");
const path = require("path");

async function sendEmail() {
  // Read the email template
  const emailTemplatePath = path.join(
    __dirname,
    "templates",
    "email-template.html"
  );
  const emailTemplate = fs.readFileSync(emailTemplatePath, "utf-8");

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "YourEmailService", // e.g., 'Gmail'
    auth: {
      user: "your.email@gmail.com",
      pass: "your-email-password",
    },
  });

  // Email data
  const mailOptions = {
    from: "your.email@gmail.com",
    to: "recipient@example.com", // Replace with the recipient's email address
    subject: "Welcome to Our Newsletter",
    html: emailTemplate,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = sendEmail;
