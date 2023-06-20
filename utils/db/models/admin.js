import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String,
    createdAt: Date,
    updatedAt: Date
});

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

export default Admin;