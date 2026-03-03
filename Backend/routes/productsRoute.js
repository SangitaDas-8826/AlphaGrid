import express from "express";
import {addProduct,getProducts} from "../controllers/productController.js";
import mongoose from "mongoose";
import {authenticated,isAdmin} from "../middleware/isAuthenticated.js"
import Product from "../models/productModel.js";

const router = express.Router();

// GET ALL PRODUCTS
router.get("/", getProducts)

// Admin only
router.post("/add-product", authenticated,isAdmin , addProduct)


    // GET SINGLE PRODUCT
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/:id", authenticated, isAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", authenticated, isAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
