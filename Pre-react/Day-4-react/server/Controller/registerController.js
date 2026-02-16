const Register = require('../models/register.js');

const submituser = async (req, res) => {
  const { name, number } = req.body;

  if (!name || !number) {
    return res.status(400).json({ message: 'Name and number are required' });
  }

  try {
    const user = await Register.create({ name, number });
    res.status(201).json({ message: 'User registered', data: user });
  } catch (error) {
    res.status(500).json({ message: 'Error saving user', error });
  }
};

module.exports = { submituser };
