import nextConnect from "next-connect";
import auth from "@/utils/middleware/auth";
import {
  deleteAdmin,
  findUserById,
  readUser,
  updateAdmin,
} from "@/utils/controllers/adminController";
import { checkAuth } from "@/utils/helpers/checkAuth";

const handler = nextConnect();

handler
  .use(auth)
  .use((req, res, next) => {
    checkAuth(req, res, next)
  })
  .use((req, res, next) => {
    findUserById(req, res, next)
  })
  .get((req, res) => {
    readUser(req, res)
  })
  .put((req, res) => {
    updateAdmin(req, res)
  })
  .delete((req, res) => {
    deleteAdmin(req, res)
  });

export default handler;
