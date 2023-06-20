import nextConnect from "next-connect";
import auth from "@/utils/middleware/auth";
import { createUser, findUserByUsername, isValid, users } from "@/utils/controllers/adminController";
import { checkAuth } from "@/utils/helpers/checkAuth";

const handler = nextConnect();

handler
  .use(auth)
  .use(async(req, res, next) => {
    //check if user is authenticated
    checkAuth(req, res, next)
  })
  .get(async (req, res) => {
    users(res)
  })
  .use((req, res, next) => {
    isValid(req, res, next)
  })
  .post(async (req, res) => {
    createUser(req, res)
  })
  

export default handler;
