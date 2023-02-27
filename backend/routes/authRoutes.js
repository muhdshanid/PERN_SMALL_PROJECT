import express from "express";
import passport from "passport";
import { sendResponse } from "../controllers/authControllers.js";
const authRouter = express.Router();



authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: "profile",
  })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    session: true,
  }),sendResponse
);

export default authRouter;
