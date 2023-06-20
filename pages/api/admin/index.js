import nextConnect from "next-connect";
import auth from "@/utils/middleware/auth";
import { createUser, findUserByUsername, users } from "@/utils/controllers/adminController";

const handler = nextConnect();

handler
  .use(auth)
  .use(async(req, res, next) => {
    //check if user is authenticated
    const user = await req.user;
    if (!user) {
        res.status(400).json({ message: "unauthorized" })
    } else {
        next()
    }
  })
  .post(async (req, res) => {
    //create new admin
    const { username, password } = req.body;
    const usernameExist = await findUserByUsername(username)
    if(!username || !password) {
        return res.json({error: 'Please fill in the necessary fields.'})
    }

    if(usernameExist){
        return res.json({error: 'Username already used.'})
    }

    const newAdmin = await createUser(username, password);

    res.json(newAdmin);
  })
  .get(async (req, res) => {
    //get all admins
    const result = await users();

    res.json(result);
  });

export default handler;
