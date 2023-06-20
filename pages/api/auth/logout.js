import auth from "@/utils/middleware/auth";
import nextConnect from "next-connect";

const handler = nextConnect();

handler.use(auth).get((req, res) => {
    req.logOut();
    res.status(204).json({})
})

export default handler