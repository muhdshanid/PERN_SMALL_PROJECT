import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { pool } from "../database/db.js";
import dotenv from "dotenv";

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (_, __, profile, done) => {
      const account = profile._json;
      let user = {};
      try {
        const existingUser = await pool.query(
          "SELECT * FROM users WHERE google_id = $1",
          [account.sub]
        );
        if (existingUser.rows.length === 0) {
          // create user
          await pool.query(
            "INSERT INTO users (username,img,google_id) VALUES ($1, $2, $3)",
            [account.name, account.picture, account.sub]
          );
         const id = await pool.query("SELECT id FROM users WHERE google_id = $1",[account.sub])
         user = {
            id:id.rows[0].id,
            username:account.name,
            img:account.picture
         }
        } else {
            //already a user
            user = {
               id: existingUser.rows[0].id,
               username: existingUser.rows[0].username,
               img: existingUser.rows[0].img,
            }
        }
        done(null,user)
      } catch (error) {
        done(error);
      }
    }
  )
);


passport.serializeUser((user,done) => {
  //loads into req.session.passport.user
  done(null,user)
});

passport.deserializeUser((user,done) => {
  //loads into req.user
  done(null,user)
})