import nodemailer from "nodemailer";

const verifyEmail = async (token, email) => {
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
      subject: "Email Verification",
      text: `Hi there!  
You recently visited our website and entered your email.  
Please click the link below to verify your email:  

https://alpha-grid-one.vercel.app/verify/${token}

Thanks!`,
    };

    // Sending email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) throw new Error(error);

      console.log("Email Sent Successfully");
    //   console.log(info);
    });
  } catch (error) {
    console.log(error);
  }
};

export default verifyEmail;
