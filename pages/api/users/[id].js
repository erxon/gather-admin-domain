import {
  singleUser,
  updateUser,
  deleteUser,
} from "@/utils/controllers/usersController";
import auth from "@/utils/middleware/auth";
import nextConnect from "next-connect";

const handler = nextConnect();

handler
  .use(auth)
  .use(async (req, res, next) => {
    const user = await req.user;
    if (!user) {
      res.status(400).json({ error: "unauthorized." });
    }
    next();
  })
  .use(async (req, res, next) => {
    const { id } = req.query;
    const result = await singleUser(id);

    if (result && result.error) {
      return res.status(400).json(result.error);
    }
    if (!result) {
      return res.status(400).json({ error: "user not found." });
    }

    req.result = result;
    next();
  })
  .get(async (req, res) => {
    res.json(req.result);
  })
  .put(async (req, res) => {
    const updateResult = await updateUser(req.result, req.body);
    if (updateResult && updateResult.error) {
      res.status(400).json(updateResult.error);
    }
    res.json(updateResult);
  })
  .delete(async (req, res) => {
    const deleteUserResult = await deleteUser(req.result);
    if (deleteUserResult && deleteUserResult.error) {
      res.status(400).json(deleteUserResult.error);
    }
    res.json(deleteUserResult);
  });

export default handler;
