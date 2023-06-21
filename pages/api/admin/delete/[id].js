import { deleteAdmin } from "@/utils/controllers/adminController";
import { checkAuth } from "@/utils/helpers/checkAuth";
import auth from "@/utils/middleware/auth";
import nextConnect from "next-connect";

const handler = nextConnect();

handler.use(auth).use((req, res, next) => {
  checkAuth(req, res, next);
}).delete((req, res) => {
    deleteAdmin(req, res)
})
