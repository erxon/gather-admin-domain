import dbConnect from "../db/dbConnect";
import Archive from "../db/models/archive";

const getArchive = async (req, res) => {
  try {
    await dbConnect();

    const archive = await Archive.find({}).populate("report").exec();

    res.status(200).json(archive);
  } catch (error) {
    res.status(200).json({ error: error, message: "something went wrong." });
  }
};

const addReport = async (req, res) => {
  try {
    await dbConnect();

    const newItem = Archive({
      report: req.body.report,
      createdAt: Date.now(),
    });

    await newItem.save();

    res.status(200).json(newItem);
  } catch (error) {
    res.status(200).json({ error: error });
  }
};

const getItem = async (req, res, next) => {
  const { id } = req.query;
  try {
    await dbConnect();

    const item = await Archive.findById(id).populate("report").exec();
    if(!item) return res.status(400).json({error: 'Archive not found.'})

    req.item = item;

    next();
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const readItem = async (req, res) => {
  res.status(200).json(req.item);
};

const updateItem = async (req, res) => {
  try {
    await dbConnect();

    const updateToApply = {
      ...req.body,
      updatedAt: Date.now(),
    };

    const update = await Archive.findByIdAndUpdate(req.item._id, updateToApply);

    res.status(200).json(update);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const removeItem = async (req, res) => {
  try {
    await dbConnect();

    const remove = await Archive.findByIdAndDelete(req.item._id);

    res.status(200).json(remove);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export { getArchive, addReport, removeItem, updateItem, readItem, getItem };
