import SibApiV3Sdk from "sib-api-v3-sdk";
import dotenv from "dotenv";

dotenv.config();

const client = SibApiV3Sdk.ApiClient.instance;

client.authentications["api-key"].apiKey =
process.env.BREVO_API_KEY;

const api = new SibApiV3Sdk.TransactionalEmailsApi();

const verifyEmail = async (email, token) => {

    console.log("EMAIL =", email);
    console.log("TOKEN =", token);

    try {

        const response = await api.sendTransacEmail({

            sender: {
                email: process.env.MAIL_USER,
                name: "Alpha Grid"
            },

            to: [
                {
                    email
                }
            ],

            subject: "Verify Email",

            htmlContent: `
            <h2>Verify Email</h2>

            <a href="https://alpha-grid-one.vercel.app/verify/${token}">
            Verify
            </a>
            `
        });

        console.log(response);

    }

    catch(err){

        console.log("BREVO ERROR");

        console.log(err.response?.body);

        console.log(err);

    }

}

export default verifyEmail;




// import SibApiV3Sdk from "sib-api-v3-sdk";
// import "dotenv/config";

// const client = SibApiV3Sdk.ApiClient.instance;

// client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

// const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

// const verifyEmail = async (email, token) => {

//   console.log("BREVO KEY =", process.env.BREVO_API_KEY);

//   const emailData = {
//     sender: {
//       name: "Alpha Grid",
//       email: process.env.MAIL_USER,
//     },
//     to: [
//       {
//         email: email,
//       },
//     ],
//     subject: "Verify your Email",

//     htmlContent: `
//       <h2>Verify Email</h2>

//       <p>Click below</p>

//       <a href="https://alpha-grid-one.vercel.app/verify/${token}">
//       Verify Email
//       </a>
//     `,
    
//   };
// console.log("BREVO_API_KEY:", process.env.BREVO_API_KEY);
// console.log("MAIL_USER:", process.env.MAIL_USER);
//   const response = await emailApi.sendTransacEmail(emailData);
  
//   console.log(response);
// };

// export default verifyEmail;




// import SibApiV3Sdk from "sib-api-v3-sdk";
// import 'dotenv/config';

// const client = SibApiV3Sdk.ApiClient.instance;

// const apiKey = client.authentications["api-key"];
// apiKey.apiKey = process.env.BREVO_API_KEY;

// const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

// const verifyEmail = async (email, token) => {

//  console.log(process.env.BREVO_API_KEY);

//   const emailData = {
//     sender: { 
//       name: "Alpha Grid", 
//       email: process.env.MAIL_USER  // your sender email
//     },
//     to: [
//       { email: email }
//     ],
//     subject: "Verify your Email",
//     textContent: `Hi there!
// You recently visited our website and entered your email.
// Please click the link below to verify your email:
// https://alpha-grid-one.vercel.app/verify/${token};

// Thanks!`
//   };

//   try {
//     await emailApi.sendTransacEmail(emailData);
//     console.log("Email sent successfully");
//   } catch (error) {
//     console.log("Email sending failed:", error);
//   }

// };

// export default verifyEmail;