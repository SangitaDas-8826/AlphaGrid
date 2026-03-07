import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const sendOTPMail = async (otp, email) => {
  console.log("sendOTPMail function started");

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
console.log(process.env.MAIL_USER);
console.log(process.env.MAIL_PASS);
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Password Reset OTP",
      html: `<p>Your OTP for password reset is: <b>${otp}</b></p>`
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);

  } catch (error) {
    console.log("Mail Error:", error);
  }
};

export default sendOTPMail;