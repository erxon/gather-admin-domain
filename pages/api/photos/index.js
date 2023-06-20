import nextConnect from "next-connect";
import { getAllPhotos } from "@/utils/controllers/photoController";

const handler = nextConnect();

handler.get((req, res) => {
    getAllPhotos(res);
});

export default handler;