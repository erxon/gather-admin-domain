import dbConnect from "../db/dbConnect";
import Report from "../db/models/report";

const getAllReports = async () => {
  try {
    await dbConnect();
    const reports = await Report.find({});
    return reports;
  } catch (error) {
    return { error: error };
  }
};

const getSingleReport = async (id) => {
  try {
    await dbConnect();
    const report = await Report.findById(id);
    return report;
  } catch (error) {
    return { error: error };
  }
};

const updateReport = async (report, update) => {
  try {
    await dbConnect();

    const { firstName, lastName, conditions, lastSeen } = update;

    const result = await Report.findByIdAndUpdate(report._id, {
      firstName,
      lastName,
      conditions,
      lastSeen,
      updatedAt: Date.now()
    });

    return result;
  } catch (error) {
    return { error: error };
  }
};

const deleteReport = async (report) => {
  try {
    await dbConnect();
    const result = await Report.findByIdAndDelete(report._id);
    return result;
  } catch (error) {
    return { error: error };
  }
};

export { getAllReports, getSingleReport, updateReport, deleteReport };
