import { Resend } from "resend";
import 'dotenv/config'
const resend = new Resend(process.env.RESEND_API_KEY);

export const verifyEmail = async (token,email) => {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "sangitadas8826@gmail.com",
      subject: "Verify your Email",
      html: `
        <div style="font-family: Arial">
          <h2>Email Verification</h2>
          <p>Your OTP for email verification is:</p>
          <h1>${token}</h1>
          <p>This OTP will expire in 10 minutes.</p>
        </div>
      `,
    });

    console.log("Email sent:", response);
  } catch (error) {
    console.log("Email error:", error);
  }
};
export default verifyEmail;