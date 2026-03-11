import express from 'express';
const router = express.Router();

import userController from "../controllers/userController.js";
import {authenticated,isAdmin} from "../middleware/isAuthenticated.js"

router.post("/register", userController.register);
router.get("/verify/:token", userController.verify);
router.post("/reVerify",userController.reVerify);
router.post("/login",userController.login);
router.post("/logout",authenticated,userController.logout);
router.post("/forgot-Password",userController.forgotPassword);
router.post("/verify-OTP/:email",userController.verifyOTP)
router.post("/change-Password/:email",userController.changePassword)
router.get("/all-users",authenticated,isAdmin,userController.allUser)
router.get("/get-user/:userId",userController.getUserById)





export default router; 