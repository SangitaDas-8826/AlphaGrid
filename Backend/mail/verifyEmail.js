import { Resend } from "resend";
import 'dotenv/config'
const resend = new Resend(process.env.RESEND_API_KEY);

export const verifyEmail = async (token,email) => {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "sangitadas8826@gmail.com",
      subject: "Verify your Email",
      text: `Hi there!  
You recently visited our website and entered your email.  
Please click the link below to verify your email:  
https://alpha-grid-one.vercel.app/verify/${token}
Thanks!`      ,
    });

    console.log("Email sent:", response);
  } catch (error) {
    console.log("Email error:", error);
  }
};
export default verifyEmail;