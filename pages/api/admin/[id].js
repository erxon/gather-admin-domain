import nextConnect from "next-connect";
import auth from "@/utils/middleware/auth";
import {
  deleteUser,
  findUserById,
  updateUserById,
} from "@/utils/controllers/adminController";
import errorMessage from "@/utils/errorMessage";

const handler = nextConnect();

handler
  .use(auth)
  .use(async (req, res, next) => {
    //check if user is authenticated
    const user = await req.user;
    if (!user) {
      res.status(400).json({ message: "unauthorized" });
    } else {
      next();
    }
  })
  .use(async (req, res, next) => {
    const { id } = req.query;

    const result = await findUserById(id);

    if (!result) {
      return res.status(400).json({ message: "user not found" });
    }
    if (result && result.error) {
      return res.status(400).json({ error: errorMessage(result.error) });
    }
    req.result = result;

    next()
  })
  .get(async (req, res) => {
    res.json(req.result);
  })
  .put(async (req, res) => {
    //Edit admin profile
    const { firstName, lastName } = req.body;
    
    const update = {
      firstName,
      lastName,
      updatedAt: Date.now(),
    };

    const result = await updateUserById(req.result.id, update);

    res.json(result);
  })
  .delete(async (req, res) => {
    //delete admin profile
    const result = await deleteUser(req.result.id);

    res.json(result);
  });

export default handler;
