import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import verifyEmail from "../mail/verifyEmail.js";
import Session from "../models/sessionModel.js";
import sendOTPMail from "../mail/sendOTPMail.js";

const register = async (req, res) => {
  try {

    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const user = await User.findOne({ email });
   console.log(email)
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    newUser.verifyToken = token;

    await newUser.save();

    console.log("Calling verifyEmail function...");
    await verifyEmail(token, email);
    console.log("verifyEmail finished");

    return res.status(200).json({
      success: true,
      message: "User registered successfully. Please verify email."
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const verify = async (req, res) => {
  try {

    const { token } = req.params;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    user.isVerified = true;
    user.verifyToken = null;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Email verified successfully"
    });

  } catch (error) {

    if (error.name === "TokenExpiredError") {
      return res.status(400).json({
        success: false,
        message: "Verification link expired"
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const reVerify = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    await verifyEmail(token, email);

    user.token = token;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "email verify again successfully",
      token: user.token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are Required",
      });
    }
    const existingUser = await User.findOne({ email })
    if (!existingUser) {
      return res.status(400).json({
        success: false,
        message: "User is not Exist",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, existingUser.password)
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Password is invalid",
      });
    }
    if (existingUser.isVerified === false) {
      return res.status(400).json({
        success: false,
        message: "Verify your account then login",
      });
    }

    const accessToken = jwt.sign(
      { id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );


    const refreshToken = jwt.sign(
      { id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    existingUser.isLoggedIn = true
    await existingUser.save();

    const existingSession = await Session.findOne({ userId: existingUser._id })
    if (existingSession) {
      await Session.deleteOne({ userId: existingUser._id })
    }

    await Session.create({ userId: existingUser._id })
    return res.status(200).json({
      success: true,
      message: `Welcome back ${existingUser.firstName}`,
      user: existingUser,
      accessToken,
      refreshToken
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

const logout = async (req, res) => {
  try {
    const userId = req.id
    await Session.deleteMany({ userId: userId })
    await User.findByIdAndUpdate(userId, { isLoggedIn: false })
    return res.status(200).json({
      success: true,
      message: "User logged out Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString()//This ensures the result is always 6 digits (never starts with 0).
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000)//otp expire within 10 mins
    user.otp = otp
    user.otpExpiry = otpExpiry
     await user.save();
    await sendOTPMail(otp, email)

    return res.status(200).json({
      success: true,
      message: "OTP send Successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

const verifyOTP = async (req, res) => {
  try {
     const {otp} = req.body
     const email  = req.params.email;
    if (!otp) {
      return res.status(400).json({
        success: false,
        message: "OTP is Required",
      });
    }

      const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    if(!user.otp || !user.otpExpiry){
      return res.status(400).json({
        success: false,
        message: "OTP not generated or already verified",
      });
    }
    if (user.otpExpiry < new Date()) {
      return res.status(400).json({
        success: false,
        message: "OTP has Expired please resend it"
      });
    }
    if (otp !== user.otp) {
      return res.status(400).json({
        success: false,
        message: "OTP is invalid",
      });
    }
    user.otp = null;
    user.otpExpiry = null;

    await user.save();
      return res.status(200).json({
        success: true,
        message: "OTP Verified Successfully",
      });
    

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

const changePassword = async (req,res) => {
  try {
     const {newPassword,confirmPassword} = req.body;
     const {email} = req.params

     const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    
    if (!newPassword || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password don not Match",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword
    await user.save()
    return res.status(200).json({
        success: true,
        message: "Password has been changed successfully"
      });

  } catch (error) {
     return res.status(500).json({
      success: false,
      message: error.message,
    }); 
  }
}

const allUser = async (req,res) => {
  try {
    const users = await User.find();
      return res.status(200).json({
        success: true,
        users
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    }); 
  }
}

const getUserById = async (req,res) => {
   try {
     const {userId} = req.params;
     const user = await User.findById(userId).select("-password -otp -otpExpiry -token")
      if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    
      return res.status(200).json({
        success: true,
        user,
      });
    
   } catch (error) {
     return res.status(500).json({
      success: false,
      message: error.message,
    }); 
   }
}

export default {
  register,
  verify,
  reVerify,
  login,
  logout,
  forgotPassword,
  verifyOTP,
  changePassword,
  allUser,
  getUserById
};
