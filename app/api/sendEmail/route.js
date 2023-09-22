import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import Email from "@/emails";

const email = process.env.NEXT_PUBLIC_EMAIL;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS;
const service = process.env.NEXT_PUBLIC_EMAIL_SERVICE;

export async function POST(request) {
  try {
    const { subject, message, to, checkbox } = await request.json();

    const transporter = nodemailer.createTransport({
      service: service,
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: email,
        pass: pass,
      },
    });
    const emailHtml = render(<Email />);

    // Define your email details
    const emailAddressesArray = to.split(",");
    // Create an array of email detail objects
    const emailDetails = emailAddressesArray.map((emailAddress) => ({
      to: emailAddress.trim(),
      subject: subject,
      message: message,
    }));

    // Function to send individual emails
    const sendEmail = async (emailDetail) => {
      const msg = checkbox ? emailHtml : emailDetail.message;
      const mailOptions = {
        from: "devilluffy14@gmail.com",
        to: emailDetail.to,
        subject: emailDetail.subject,
        html: msg,
      };
      try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${emailDetail.to} successfully`);
      } catch (error) {
        console.error(`Error sending email to ${emailDetail.to}:`, error);
        throw error;
      }
    };

    // Loop through emailDetails array and send emails one by one
    // for (const emailDetail of emailDetails) {
    //   sendEmail(emailDetail);
    // }

    // Use Promise.all to send all emails and wait for all promises to resolve
    await Promise.all(emailDetails.map(sendEmail));

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
