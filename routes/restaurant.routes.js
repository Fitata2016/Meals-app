const express = require("express");

const {
  createRestaurant,
  getAllRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/restaurant.controller");

const restaurantRouter = express.Router();

restaurantRouter.post("/", createRestaurant);
restaurantRouter.get("/", getAllRestaurants);
restaurantRouter.get("/:id", getRestaurantById);
restaurantRouter.patch("/:id", updateRestaurant);
restaurantRouter.delete("/:id", deleteRestaurant);
restaurantRouter.post("/reviews/:restaurantId", createReview);
restaurantRouter.patch("/reviews/:id", updateReview);
restaurantRouter.delete("/reviews/:id", deleteReview);

module.exports = { restaurantRouter };
