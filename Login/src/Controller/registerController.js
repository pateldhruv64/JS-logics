// //

// const Register = require('../models/register.js');

// const submituser = async (req, res) => {
//     const { name, number } = req.body;

// // if (!name && !number) {
// //     console.log("you are already register");

// // }

//     try {
//         const newUser = new Register({ name, number });
//         await newUser.save();
//         res.status(201).json({ message: 'message sent succ' });
//     } catch (error) {
//         res.status(500).json({ message: 'message error' });
//     }
// };

// module.exports = { submituser };/

const Register = require("../models/register.js");

const submituser = async (req, res) => {
  const { name, number } = req.body;

  // Validate input
  if (!name || !number) {
    return res.status(400).json({ message: "Name and number are required" });
  }

  try {
    // Check if user already exists
    const existingUser = await Register.findOne({ number });
    if (existingUser) {
      return res.status(409).json({ message: "User already registered" });
    }

    // Save new user

    const newUser = new Register({ name, number });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { submituser };
