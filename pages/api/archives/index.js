import nextConnect from "next-connect";
import { getArchive, addReport } from "@/utils/controllers/archiveController";
import auth from "@/utils/middleware/auth";
import { checkAuth } from "@/utils/helpers/checkAuth";

const handler = nextConnect();

handler
  .use(auth)
  .use((req, res, next) => {
    checkAuth(req, res, next);
  })
  .get((req, res) => {
    //getArchives
    getArchive(req, res);
  })
  .post((req, res) => {
    //add report to archives
    addReport(req, res);
  });

export default handler;
