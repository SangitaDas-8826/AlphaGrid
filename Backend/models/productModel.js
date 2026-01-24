import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  brand: { type: String },
  quality: { type: String },
  image: { type: String, required: true },
  images: [String], // for thumbnails
  description: { type: String }, // ✅ make sure this exists
  countInStock: { type: Number, default: 0 },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
