import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import passport from 'passport'
import router from "./routes/indexRouter.js";
import authRouter from "./routes/authRoutes.js";
import './controllers/auth.js'
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;


app.use(express.json())

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use(session({
    secret:process.env.COOKIE_SECRET,
    cookie:{
        secure:process.env.NODE_ENV === "production" ? "true" : "auto",
        sameSite:process.env.NODE_ENV === "production" ? "none" : "lax"
    },
    resave: false,
    saveUninitialized: false  
}))        

app.use(passport.initialize())
app.use(passport.session())

app.use("/",router)
app.use("/auth",authRouter)

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
