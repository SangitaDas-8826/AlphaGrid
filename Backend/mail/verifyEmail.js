import nodemailer from "nodemailer";

const verifyEmail = async (token, email) => {
  try {
    console.log("verifyEmail function started");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Email Verification",
      html: `
        <h2>Email Verification</h2>
        <p>Please click the link below to verify your email:</p>
        <a href="https://alpha-grid-one.vercel.app/verify/${token}">
          Verify Email
        </a>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email Sent Successfully");
    console.log(info.response);

  } catch (error) {
    console.log("Mail Error:", error);
  }
};

export default verifyEmail;