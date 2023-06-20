import nextConnect from "next-connect";

const handler = nextConnect();

handler.post(async (req, res) => {
    //create new admin
}).get(async (req, res) => {
    //get all admins
})

export default handler;