import {
  deleteReport,
  getSingleReport,
  updateReport,
} from "@/utils/controllers/reportController";
import auth from "@/utils/middleware/auth";
import nextConnect from "next-connect";

const handler = nextConnect();

handler
  .use(auth)
  .use(async (req, res, next) => {
    const user = await req.user;
    if (!user) {
      return res.status(400).json({ error: "unauthorized." });
    }
    next();
  })
  .use(async (req, res, next) => {
    const { id } = req.query;
    const report = await getSingleReport(id);

    if (report && report.error) {
      return res.status(400).json(report.error);
    }
    if (!report) {
      return res.status(400).json({ error: "no report found." });
    }

    req.result = report;

    next();
  })
  .get(async (req, res) => {
    res.json(req.result);
  })
  .put(async (req, res) => {
    //update the report
    const update = await updateReport(req.result, req.body);
    if (update && update.error) {
      return res.status(400).json(update.error);
    }
    res.json(update);
  })
  .delete(async (req, res) => {
    //delete the report
    const deleteResult = await deleteReport(req.result);
    if (deleteResult && deleteResult.error) {
      return res.status(400).json(deleteResult.error);
    }
    res.json(deleteResult);
  });

export default handler;
