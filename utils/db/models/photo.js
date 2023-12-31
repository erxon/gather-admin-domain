import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  image: String,
  images: [{
    publicId: String,
    fileName: String
  }],
  reportId: { type: mongoose.Schema.Types.ObjectId, ref: "Report" },
  missingPerson: String,
  type: String
});

const Photo = mongoose.models.Photo || mongoose.model("Photo", photoSchema);

export default Photo;