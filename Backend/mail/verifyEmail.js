import { Resend } from "resend";
import 'dotenv/config'

const resend = new Resend(process.env.RESEND_API_KEY);

const verifyEmail = async (token, email) => {

  const verifyLink = `https://alpha-grid-one.vercel.app/verify/${token}`;

  await resend.emails.send({
    from: process.env.MAIL_USER,
    subject: "Verify Email",
    html: `<a href="${verifyLink}">Verify your email</a>`
  });

};

export default verifyEmail;