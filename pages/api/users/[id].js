import { readUser } from "@/utils/controllers/adminController";
import {
  singleUser,
  updateUser,
  deleteUser,
  getSingleUser,
} from "@/utils/controllers/usersController";
import { checkAuth } from "@/utils/helpers/checkAuth";
import auth from "@/utils/middleware/auth";
import nextConnect from "next-connect";

const handler = nextConnect();

handler
  .use(auth)
  .use((req, res, next) => {
    checkAuth(req, res, next)
  })
  .use((req, res, next) => {
    getSingleUser(req, res, next)
  })
  .get((req, res) => {
    readUser(req, res)
  })
  .put((req, res) => {
    updateUser(req, res);
  })
  .delete((req, res) => {
     deleteUser(req, res)
  });

export default handler;
