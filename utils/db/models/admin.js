import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    hash: String,
    salt: String,
    createdAt: Date,
    updatedAt: Date,
    firstName: String,
    lastName: String,
});

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

export default Admin;