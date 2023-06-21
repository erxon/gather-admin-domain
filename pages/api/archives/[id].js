import nextConnect from "next-connect";
import auth from "@/utils/middleware/auth";
import { checkAuth } from "@/utils/helpers/checkAuth";
import {
  getItem,
  readItem,
  updateItem,
  removeItem
} from "@/utils/controllers/archiveController";

const handler = nextConnect();

handler
  .use(auth)
  .use((req, res, next) => {
    checkAuth(req, res, next);
  })
  .use((req, res, next) => {
    //get a particular report in archive
    getItem(req, res, next);
  })
  .get((req, res) => {
    readItem(req, res);
  })
  .put((req, res) => {
    //add an info to the archive
    updateItem(req, res);
  })
  .delete((req, res) => {
    //delete an item in archive
    removeItem(req, res);
  });

export default handler;
