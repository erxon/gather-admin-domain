import crypto from "crypto";
import dbConnect from "../db/dbConnect";
import Admin from "../db/models/admin";

const users = async () => {
  try {
    await dbConnect();
    const result = await Admin.find().select("username createdAt");
    return result;
  } catch (error) {
    return error;
  }
};

const createUser = async (username, password) => {
  try {
    await dbConnect();
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
      .pbkdf2Sync(password, salt, 1000, 64, "sha512")
      .toString("hex");
    const user = {
      createdAt: Date.now(),
      username,
      hash,
      salt,
    };

    const newAdmin = Admin(user);
    await newAdmin.save();
    return { message: "user successfully saved" };
  } catch (error) {
    return error;
  }
};

const findUserById = async (id) => {
  try {
    await dbConnect();
    const user = await Admin.findById(id);
    return user;
  } catch (error) {
    return { error: error };
  }
};

const findUserByUsername = async (username) => {
  try {
    await dbConnect();
    const user = await Admin.findOne({ username: username });
    return user;
  } catch (error) {
    return error;
  }
};

const updateUserById = async (id, update) => {
  try {
    const user = await Admin.findByIdAndUpdate(id, update);
    return user;
  } catch (error) {
    return error;
  }
};

const updateUserByUsername = async (username, update) => {
  try {
    await dbConnect();
    const user = await Admin.findOneAndUpdate(username, update);
    return { message: "succesfully updated", user: user, update: update };
  } catch (error) {
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    await dbConnect();
    const user = await Admin.findByIdAndDelete(id);
    return { message: "user deleted", data: user };
  } catch (error) {
    return error;
  }
};

// Compare the password of an already fetched user (using `findUserByUsername`) and compare the
// password for a potential match
const validatePassword = (user, inputPassword) => {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, "sha512")
    .toString("hex");
  const passwordsMatch = user.hash === inputHash;
  return passwordsMatch;
};

export {
  createUser,
  findUserById,
  findUserByUsername,
  updateUserById,
  updateUserByUsername,
  deleteUser,
  validatePassword,
  users,
};
