import nextConnect from "next-connect";
import { getAllReports } from "@/utils/controllers/reportController";
import auth from "@/utils/middleware/auth";

const handler = nextConnect();

handler
  .use(auth)
  .use(async (req, res, next) => {
    const user = await req.user;

    if (!user) {
      return res.status(400).json({ error: "unauthorized." });
    }
    next()
  })
  .get(async (req, res) => {
    //get all reports
    const reports = await getAllReports();

    if (reports && reports.error) {
      res.status(400).json(reports.error);
    }

    res.json(reports);
  });

export default handler;
