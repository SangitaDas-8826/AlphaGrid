import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },

    lastName: {
      type: String,
      required: true,
      trim: true
    },

    profilePic: {
      type: String,
      default: ""
    },

    deletePic: {
      type: String,
      default: ""
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },

    token: {
      type: String,
      default: null
    },

    isVerified: {
      type: Boolean,
      default: false
    },
    verifyToken: {
     type: String
    },

    isLoggedIn: {
      type: Boolean,
      default: false
    },

    otp: {
      type: String,
      default: null
    },

    otpExpiry: {
      type: Date,
      default: null
    },

    address: {
      type: Number,
      default: ""
    },

    city: {
      type: String,
      default: ""
    },

    zipCode: {
      type: String,
      default: ""
    },

    phoneNo: {
      type: String,
      default: ""
    }
  },
   
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
