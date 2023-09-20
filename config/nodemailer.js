import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { Email } from "@emails/Email";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass,
  },
});

const emailHtml = render(<Email />);
const mailOptions = {
  from: "you@example.com",
  to: "user@gmail.com",
  subject: "hello world",
  html: emailHtml,
};

try {
  await transporter.sendMail(mailOptions);
  console.log("Email sent successfully");
} catch (error) {
  console.error("Error sending email:", error);
}

//test

// import nodemailer from "nodemailer";

// const email = process.env.EMAIL;
// const pass = process.env.EMAIL_PASS;

// export const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: email,
//     pass,
//   },
// });

// export const mailOptions = {
//   from: email,
//   to: email,
// };
