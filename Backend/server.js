import express from 'express';
const app = express();
import { fileURLToPath } from "url";
import cors from 'cors';
import Razorpay from "razorpay";
import Crypto from "crypto";
import connectDB from './database/db.js';
import userRoutes from './routes/userRoutes.js';
import path from 'path';
import Product from './models/productModel.js'
import productRoute from './routes/productsRoute.js'
import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils.js";
import { configDotenv } from "dotenv";

configDotenv();


// middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static("public"));
app.use("/upload", express.static(path.join(process.cwd(), "upload")));

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


const PORT = process.env.PORT || 5000;

// mount route
app.use('/api/user', userRoutes);

app.use("/api/products", productRoute);

// Example route
import mongoose from "mongoose";

app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  const product = await Product.findById(id);
  if (product) res.json(product);
  else res.status(404).json({ message: "Product not found" });
});

app.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: req.body.amount ,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

app.post("/verify-payment", (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const secret = process.env.RAZORPAY_KEY_SECRET;
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const isValidSignature = validateWebhookSignature(
      body,
      razorpay_signature,
      secret
    );

    if (isValidSignature) {
      console.log("Payment Verification Successful");
      res.status(200).json({ status: "ok" });
    } else {
      console.log("Payment Verification Failed");
      res.status(400).json({ status: "verification_failed" });
    }
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});



app.listen(PORT, "0.0.0.0", () => {
    connectDB();
    console.log(`Server is listening on ${PORT}`);
});
