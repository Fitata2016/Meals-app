const express = require("express");

const {
  createOrder,
  getAllOrders,
  CompleteOrder,
  CancelOrder,
} = require("../controllers/order.controller");

const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/me", getAllOrders);
orderRouter.patch("/:id", CompleteOrder);
orderRouter.delete(":id", CancelOrder);

module.exports = { orderRouter };
