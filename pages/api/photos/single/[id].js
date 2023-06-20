import {
  deletePhoto,
  getSinglePhoto,
  readPhoto,
} from "@/utils/controllers/photoController";
import auth from "@/utils/middleware/auth";
import { checkAuth } from "@/utils/helpers/checkAuth";
import nextConnect from "next-connect";

const handler = nextConnect();

handler
  .use(auth)
  .use((req, res, next) => {
    checkAuth(req, res, next);
  })
  .use((req, res, next) => {
    getSinglePhoto(req, res, next);
  })
  .get((req, res) => {
    readPhoto(req, res);
  })
  .delete((req, res) => {
    deletePhoto(req, res);
  });

export default handler;
