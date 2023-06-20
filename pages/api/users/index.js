import nextConnect from "next-connect";
import { getUsers, addUser } from "@/utils/controllers/usersController";

const handler = nextConnect();

handler
  .get(async (req, res) => {
    //get all users
     getUsers(res);
  })
  .post((req, res) => {
    //push user to DB after verification
    
  });

export default handler;
