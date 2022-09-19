const { User } = require("../models/user.model");

const createUser = async (res, req) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({
      name,
      email,
      password,
    });
    res.status(201).json({
      status: "success",
      data: { newUser },
    });
  } catch (error) {
    console.log(error);
  }
};

const logInUser = () => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const updateUser = () => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = () => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const getAllOrdersByUser = (req, res) => {
  try {
    const users = User.findAll();

    res.status(200).json({
      status: "success",
      data: { users },
    });
  } catch (error) {
    console.log(error);
  }
};

const getOrderByUser = () => {
  try {
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  logInUser,
  updateUser,
  deleteUser,
  getAllOrdersByUser,
  getOrderByUser,
};
