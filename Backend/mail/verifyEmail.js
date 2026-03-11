
import nodemailer from "nodemailer";
import 'dotenv/config'

const verifyEmail = async (email, token) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  const mailOptions = {
    from: "onboarding@resend.dev",
      to: email,
    subject: "Verify your Email",
   text: `Hi there!  
You recently visited our website and entered your email.  
Please click the link below to verify your email:  
https://alpha-grid-one.vercel.app/verify/${token}
Thanks!` ,
  };

  await transporter.sendMail(mailOptions);
};

export default verifyEmail;