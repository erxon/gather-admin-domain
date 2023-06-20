import crypto from "crypto";
import dbConnect from "../db/dbConnect";
import Admin from "../db/models/admin";

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

const findUserByUsername = async (username) => {
  try {
    await dbConnect();
    const user = await Admin.findOne({ username: username });
    return user;
  } catch (error) {
    return error;
  }
};

const updateUserByUsername = async (username, update) => {
  try {
    await dbConnect();
    const user = await Admin.findOneAndUpdate(username, update);
    return { message: "succesfully updated", update: user };
  } catch (error) {
    return error;
  }
};

const deleteUser = async (username) => {
  try {
    await dbConnect();
    const user = await Admin.findOneAndDelete(username);
    return { message: "user deleted", data: user };
  } catch (error) {
    return error;
  }
};

// Compare the password of an already fetched user (using `findUserByUsername`) and compare the
// password for a potential match
const validatePassword = async (user, inputPassword) => {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, "sha512")
    .toString("hex");
  const passwordsMatch = user.hash === inputHash;
  return passwordsMatch;
};

export {
  createUser,
  findUserByUsername,
  updateUserByUsername,
  deleteUser,
  validatePassword,
};
