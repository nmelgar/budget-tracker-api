import express from "express";
import { login, googleAuth, logout } from "../controllers/loginController";

const router = express.Router();

// login route
router.get("/login", login);

// logout route
router.get("/logout", logout);

// auth with google
router.get("/google", googleAuth);

export default router;
