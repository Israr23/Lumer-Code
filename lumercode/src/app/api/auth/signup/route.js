// pages/api/auth/signup.js
import dbConnect from "../../../utils/dbConnect"; // Utility to connect to MongoDB
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export async function POST(req, res) {
  await dbConnect();

  const { email, password } = await req.json(); // Fetch the request body data from req.json()

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ message: "User already exists" }), {
      status: 400,
    });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const user = new User({ email, password: hashedPassword });
  await user.save();

  return new Response(
    JSON.stringify({ message: "User created successfully" }),
    {
      status: 201,
    }
  );
}
