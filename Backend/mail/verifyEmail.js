import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const verifyEmail = async (token, email) => {

  const verifyLink = `https://alpha-grid-one.vercel.app/verify/${token}`;

  await resend.emails.send({
    from: "AlphaGrid <onboarding@resend.dev>",
    to: email,
    subject: "Verify Email",
    html: `<a href="${verifyLink}">Verify your email</a>`
  });

};

export default verifyEmail;