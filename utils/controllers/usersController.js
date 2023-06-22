import dbConnect from "../db/dbConnect";
import User from "../db/models/user";

const getUsers = async (res) => {
  try {
    await dbConnect();
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const addUser = async (data) => {
  try {
    await dbConnect();

    const newUser = User(data);
    await newUser.save();

    return newUser;
  } catch (error) {
    return { error: error };
  }
};

const getSingleUser = async (req, res, next) => {
  const { id } = req.query;
  try {
    await dbConnect();
    const user = await User.findById(id);
    if (!req.result) {
      return res.status(400).json({ error: "user does not exist" });
    }
    req.result = user;
    next();
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
const readUser = (req, res) => {
  res.status(200).json(req.result);
};

const updateUser = async (req, res) => {
  try {
    await dbConnect();
    
    const updateUser = await User.updateOne(
      { _id: req.result._id },
      {
        ...req.body,
        updatedAt: Date.now(),
      }
    );

    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    await dbConnect();
    const deleteUser = await User.deleteOne({ _id: req.result._id });
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const getUnverifiedUsers = async (req, res) => {
  try {
    await dbConnect();

    const unverifiedUsers = await User.find({ status: "unverified" });

    res.status(200).json(unverifiedUsers);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export { getUsers, addUser, getSingleUser, readUser, updateUser, deleteUser, getUnverifiedUsers };
