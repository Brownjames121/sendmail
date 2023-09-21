import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import Email from "@/emails";

// const email = process.env.EMAIL;
// const pass = process.env.EMAIL_PASS;

export async function POST(request) {
  try {
    const { subject, message, to, checkbox } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        // user: email,
        // pass: pass,
        user: "devilluffy14@gmail.com",
        pass: "tmhbtgcbwotsqlju",
      },
    });
    const emailHtml = render(<Email />);

    // start
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
      }
    };

    // Loop through emailDetails array and send emails one by one
    for (const emailDetail of emailDetails) {
      sendEmail(emailDetail);
    }
    // end

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import { render } from "@react-email/render";
// import Email from "@/emails";

// // const email = process.env.EMAIL;
// // const pass = process.env.EMAIL_PASS;

// export async function POST(request) {
//   try {
//     const { subject, message, to } = await request.json();

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         // user: email,
//         // pass,
//         user: "devilluffy14@gmail.com",
//         pass: "tmhbtgcbwotsqlju",
//       },
//     });
//     const emailHtml = render(<Email />);

//     const mailOption = {
//       from: "devilluffy14@gmail.com",
//       to: to,

//       subject: subject,
//       html: message,
//     };

//     await transporter.sendMail(mailOption);

//     return NextResponse.json(
//       { message: "Email Sent Successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Failed to Send Email" },
//       { status: 500 }
//     );
//   }
// }
