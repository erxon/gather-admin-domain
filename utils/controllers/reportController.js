import dbConnect from "../db/dbConnect";
import Report from "../db/models/report";

const getAllReports = async (req, res) => {
  try {
    await dbConnect();
    const reports = await Report.find({});
    res.status(200).json(reports);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const getSingleReport = async (req, res, next) => {
  const { id } = req.query;
  try {
    await dbConnect();
    const report = await Report.findById(id);
    if (!report) {
      return res.status(400).json({ error: "no report found." });
    }
    req.result = report;
    next();
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const readReport = (req, res) => {
  res.status(200).json(req.result);
};

const updateReport = async (req, res) => {
  try {
    await dbConnect();

    const report = await Report.updateOne({_id: req.result._id}, {
      ...req.body,
      updatedAt: Date.now(),
    });

    res.status(200).json(report);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const deleteReport = async (req, res) => {
  try {
    await dbConnect();
    const result = await Report.deleteOne({_id: req.result._id});
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json({error: error})
  }
};

export {
  getAllReports,
  getSingleReport,
  updateReport,
  deleteReport,
  readReport,
};
