import crypto from "crypto";
import dbConnect from "../db/dbConnect";
import Admin from "../db/models/admin";

const users = async (res) => {
  try {
    await dbConnect();
    const result = await Admin.find().select("username createdAt");

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const isValid = async (req, res, next) => {
  const { username, password } = req.body;
  const usernameExist = await Admin.findOne({ username: username });
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Please fill in the necessary fields." });
  }

  if (usernameExist) {
    return res.status(400).json({ error: "Username already used." });
  }
  next();
};

const createUser = async (req, res) => {
  const { username, password } = req.body;

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

    res.status(200).json(newAdmin);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const findUserById = async (req, res, next) => {
  const { id } = req.query;
  try {
    await dbConnect();
    const user = await Admin.findById(id);
    if (!user) {
      return res.status(400).json({ error: "user do not exist." });
    }

    req.result = user;

    next();
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const readUser = async (req, res) => {
  res.status(200).json(req.result);
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

const updateAdmin = async (req, res) => {
  try {
    const user = req.result;

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.updatedAt = Date.now();

    await user.save();
    res.status(200).json({ user, message: "Updated successfully." });
  } catch (error) {
    res.status(400).json({ error: error, message: "Something went wrong." });
  }
};

const updateUserByUsername = async (username, update) => {
  try {
    await dbConnect();
    const user = await Admin.findOneAndUpdate({username: username}, update);
    return { message: "succesfully updated", user: user, update: update };
  } catch (error) {
    return error;
  }
};

const deleteAdmin = async (req, res) => {
  try {
    await dbConnect();
    //Check if the username typed in client matches the user's username
    const deleteAdmin = await Admin.deleteOne(req.result._id);
    res.status(200).json(deleteAdmin);
  } catch (error) {
    res.status(400).json({ error: error });
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

const changePassword = async (req, res) => {
  const user = await req.user;
  const {
    currentPassword,
    newPassword
  } = req.body

  //if fields are empty send error
  if(currentPassword === "" || newPassword === ""){
    return res.status(400).json({message: 'Please fill all the necessary fields.'})
  }
  //check if password match
  const isMatch = validatePassword(user, currentPassword)
  
  if(isMatch){
    try{
      //if match, generate salt and hash for new password
      const newPasswordSalt = crypto.randomBytes(16).toString("hex");
      const newPasswordHash = crypto
      .pbkdf2Sync(newPassword, newPasswordSalt, 1000, 64, "sha512")
      .toString("hex");
      const update = {
        salt: newPasswordSalt,
        hash: newPasswordHash,
        updatedAt: Date.now()
      }
      //save the new salt and hash
      const updateUser = await updateUserByUsername(user.username, update)
      //send success message
      res.status(200).json(updateUser)
    } catch (error){
      res.status(400).json({error: error, message: 'something went wrong.'})
    }
  } else {
    //if not match, send error message 'password not match'
    res.status(400).json({error: 'Password does not match.' })
  }
}



export {
  isValid,
  createUser,
  findUserById,
  readUser,
  findUserByUsername,
  updateAdmin,
  updateUserByUsername,
  deleteAdmin,
  validatePassword,
  users,
  changePassword
};
