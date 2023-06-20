import nextConnect from "next-connect";
import auth from "@/utils/middleware/auth";
import passport from "@/utils/auth/passport";

const handler = nextConnect();

handler.use(auth).post(passport.authenticate("local"), async (req, res) => {
  const user = await req.user;
  res.json(user);
});

export default handler;
