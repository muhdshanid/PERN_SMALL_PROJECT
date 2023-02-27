import express from "express";
import { loginSuccess } from "../controllers/userControllers.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router()

router.get("/account",isAuth,loginSuccess)

export default router