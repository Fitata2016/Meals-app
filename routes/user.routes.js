const express = require("express");

const {
  createUser,
  logInUser,
  updateUser,
  deleteUser,
  getAllOrdersByUser,
  getOrderByUser,
} = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/signup", createUser);
userRouter.post("/login", logInUser);
userRouter.patch("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.get("/orders", getAllOrdersByUser);
userRouter.get("/orders/:id", getOrderByUser);

module.exports = { userRouter };
