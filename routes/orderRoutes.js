import express from "express";
import mongoose from "mongoose";
import Order from "../models/orderModel.js"; // make sure this exists
import { protect } from "../middleware/authMiddleware.js"; // if you have auth middleware

const router = express.Router();

// ===========================
// CREATE NEW ORDER
// ===========================
router.post("/", protect, async (req, res) => {
  const { cartItems, total, expectedDelivery } = req.body;

  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  // ✅ Copy product info into order items
  const orderItems = cartItems.map((item) => ({
    product: item._id,       // product reference
    name: item.name,          // copy name
    image: item.image,        // copy main image
    quantity: item.quantity,
    price: item.price,
  }));

  try {
    const order = new Order({
      user: req.user._id,
      items: orderItems,
      total,
      status: "order_placed",
      expectedDelivery,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===========================
// GET ORDER BY ID
// ===========================
router.get("/:id", protect, async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid order ID" });
  }

  try {
    const order = await Order.findById(id).populate("user", "name email");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===========================
// GET ALL ORDERS FOR USER
// ===========================
router.get("/", protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
