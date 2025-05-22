import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    }

);

const user = mongoose.model("User", userSchema);
export default user;