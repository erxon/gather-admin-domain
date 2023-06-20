import {
  getAllQueryPhotos,
  getAllReferencePhotos,
} from "@/utils/controllers/photoController";
import nextConnect from "next-connect";

const handler = nextConnect();

handler.get((req, res) => {
  const { type } = req.query;
  if (type === "reference") {
    getAllReferencePhotos(res);
  }
  if (type === "query") {
    getAllQueryPhotos(res);
  }
});

export default handler;
