import nextConnect from "next-connect";
import auth from "@/utils/middleware/auth";
import { checkAuth } from "@/utils/helpers/checkAuth";
import { getUnverifiedUsers } from "@/utils/controllers/usersController";

const handler = nextConnect();

handler
  .use(auth)
  .use((req, res, next) => {
    checkAuth(req, res, next);
  })
  .get((req, res) => {
    //get users that are not yet verified
    getUnverifiedUsers(req, res);
  });

export default handler;
