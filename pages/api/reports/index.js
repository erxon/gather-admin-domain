import nextConnect from "next-connect";
import { getAllReports } from "@/utils/controllers/reportController";
import auth from "@/utils/middleware/auth";
import { checkAuth } from "@/utils/helpers/checkAuth";

const handler = nextConnect();

handler
  .use(auth)
  .use(async (req, res, next) => {
    checkAuth(req, res, next)
  })
  .get(async (req, res) => {
    //get all reports
    getAllReports(req, res)
  });

export default handler;
