import nodemailer from "nodemailer";

const sendOTPMail = async (otp, email) => {
  try {
   

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Password Reset OTP",
      html:`<p>Your OTP for password reset is:<b>${otp}</b></p>`
    };

    // Sending email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) throw new Error(error);
 console.log("Email sent:", info.response);
      console.log("OTP Sent Successfully");
       console.log(info);
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendOTPMail;
