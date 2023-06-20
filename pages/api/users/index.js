import nextConnect from "next-connect";
import { getUsers, addUser } from "@/utils/controllers/usersController";

const handler = nextConnect();

handler
  .get(async (req, res) => {
    //get all users
    const users = await getUsers();
    res.status(200).json(users);
  })
  .post((req, res) => {
    //push user to DB after verification
    
  });

export default handler;
