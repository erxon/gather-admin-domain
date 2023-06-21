import nextConnect from "next-connect";
import auth from "@/utils/middleware/auth";
import {changeOtherAdminPassword} from "@/utils/controllers/adminController";
import { checkAuth } from "@/utils/helpers/checkAuth";

const handler = nextConnect();

handler
  .use(auth)
  .use((req, res, next) => {
    checkAuth(req, res, next);
  })
  .put((req, res) => {
    //change password controller
    changeOtherAdminPassword(req, res)
  });

export default handler;