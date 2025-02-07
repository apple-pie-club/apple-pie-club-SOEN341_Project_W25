import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isGlobalAdmin: { type: Boolean, required: true}
}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", UserSchema);
