import mongoose from "mongoose";

// Define the schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Check if the model is already compiled, if not, compile it
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;