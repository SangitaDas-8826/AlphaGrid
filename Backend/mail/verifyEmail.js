import nodemailer from "nodemailer";

const verifyEmail = async (token, email) => {
  try {
   
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Email Verification",
      text: `Hi there!  
You recently visited our website and entered your email.  
Please click the link below to verify your email:  

https://alpha-grid-one.vercel.app/verify/${token}

Thanks!`,
    };

    // Sending email
    await transporter.sendMail(mailOptions)
    console.log("Verification email sent");
     
  } catch (error) {
    console.log(error);
  }
};

export default verifyEmail;
