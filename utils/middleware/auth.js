import nextConnect from "next-connect";
import passport from '../auth/passport'
import session from "../auth/session";

const auth = nextConnect()
  .use(
    session({
      name: "sess",
      secret: process.env.NEXT_PUBLIC_TOKEN_SECRET,
      cookie: {
        maxAge: 60 * 60 * 8, // 8 hours,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "lax",
      },
    })
  ).use(passport.initialize())
  .use(passport.session());

export default auth;
