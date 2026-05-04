import SibApiV3Sdk from "sib-api-v3-sdk";
import 'dotenv/config';

const client = SibApiV3Sdk.ApiClient.instance;

const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

const verifyEmail = async (email, token) => {

 

  const emailData = {
    sender: { 
      name: "Alpha Grid", 
      email: process.env.MAIL_USER  // your sender email
    },
    to: [
      { email: email }
    ],
    subject: "Verify your Email",
    textContent: `Hi there!
You recently visited our website and entered your email.
Please click the link below to verify your email:
https://alpha-grid-one.vercel.app/verify/${token};

Thanks!`
  };

  try {
    await emailApi.sendTransacEmail(emailData);
    console.log("Email sent successfully");
  } catch (error) {
    console.log("Email sending failed:", error);
  }

};

export default verifyEmail;