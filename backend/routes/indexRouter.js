import express from "express";
import { createPost, getAllPosts, getUserPosts } from "../controllers/postControllers.js";
import { loginSuccess } from "../controllers/userControllers.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router()

router.get("/account",isAuth,loginSuccess)
router.post("/new-post",isAuth,createPost)
router.get("/feed",isAuth,getAllPosts)
router.get("/my-posts",isAuth,getUserPosts)

export default router 