import bcrypt from "bcryptjs";
import User from "../models/User.js";

// REGISTER USER
export const registerUser = async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;

    if (!fullName || !username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail)
      return res.status(400).json({ error: "Email already in use" });

    const existingUsername = await User.findOne({ username });
    if (existingUsername)
      return res.status(400).json({ error: "Username already taken" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({ message: "Account created successfully" });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// LOGIN USER
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ error: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ error: "Invalid credentials" });

    return res.json({
      message: "Login successful",
      userId: user._id,
      username: user.username,
      fullName: user.fullName,
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// FORGOT PASSWORD (placeholder)
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    return res.json({
      message: user
        ? "If your account exists, reset instructions were sent."
        : "If your account exists, reset instructions were sent.",
    });
  } catch (err) {
    console.error("FORGOT PASSWORD ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// USERNAME RESET
export const resetUsername = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    return res.json({
      message: user
        ? `Your username is: ${user.username}`
        : "If your account exists, username instructions were sent.",
    });
  } catch (err) {
    console.error("USERNAME RESET ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
};
