import {
  deleteReport,
  getSingleReport,
  updateReport,
  readReport,
} from "@/utils/controllers/reportController";
import { checkAuth } from "@/utils/helpers/checkAuth";
import auth from "@/utils/middleware/auth";
import nextConnect from "next-connect";

const handler = nextConnect();

handler
  .use(auth)
  .use(async (req, res, next) => {
    checkAuth(req, res, next);
  })
  .use(async (req, res, next) => {
    getSingleReport(req, res, next);
  })
  .get(async (req, res) => {
    readReport(req, res);
  })
  .put(async (req, res) => {
    updateReport(req, res);
  })
  .delete(async (req, res) => {
    deleteReport(req, res);
  });

export default handler;
