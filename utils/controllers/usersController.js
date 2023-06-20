import dbConnect from "../db/dbConnect";
import User from "../db/models/user";

const getUsers = async () => {
  try {
    await dbConnect();
    const users = await User.find();
    return users;
  } catch (error) {
    return { error: error };
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

const singleUser = async (id) => {
  try {
    await dbConnect();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    return { error: error };
  }
};

const updateUser = async (user, update) => {
  try {
    await dbConnect();
    
    const { firstName, lastName, type } = update;

    const updateUser = await User.findByIdAndUpdate(user._id, {
      firstName,
      lastName,
      type,
      updatedAt: Date.now(),
    });

    return { message: "updated successfully", update: updateUser };
  } catch (error) {
    return { error: error };
  }
};

const deleteUser = async (user) => {
  try {
    await dbConnect();
    const deleteUser = await User.findByIdAndDelete(user._id);
    return deleteUser;
  } catch (error) {
    return { error: error };
  }
};

export { getUsers, addUser, singleUser, updateUser, deleteUser };
