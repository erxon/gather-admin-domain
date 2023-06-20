import dbConnect from "../db/dbConnect";
import Photo from "../db/models/photo";

const getAllPhotos = async (res) => {
  //get all photos
  try {
    await dbConnect();
    const photos = await Photo.find({});
    res.status(200).json(photos);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const getAllReferencePhotos = async (res) => {
  //get all photos with type: reference
  try {
    await dbConnect();
    const photos = await Photo.find({ type: "reference" });
    res.status(200).json(photos);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const getAllQueryPhotos = async (res) => {
  //get all photos with type: query
  try {
    await dbConnect();
    const photos = await Photo.find({ type: "query" });
    res.status(200).json(photos);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const getSinglePhoto = async (req, res, next) => {
  const { id } = req.query;
  try {
    await dbConnect();
    const photo = await Photo.findById(id);
    req.result = photo;
    next();
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const readPhoto = (req, res) => {
    res.status(200).json(req.result)
}

const deletePhoto = async (req, res) => {
  //delete a photo
  try {
    await dbConnect();
    const result = await Photo.findByIdAndDelete(req.result);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export { getAllPhotos, getAllReferencePhotos, getAllQueryPhotos, getSinglePhoto, readPhoto, deletePhoto };
