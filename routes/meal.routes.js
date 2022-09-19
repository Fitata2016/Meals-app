const express = require("express");

const {
  createMeal,
  getAllMeals,
  getMealById,
  updateMeal,
  deleteMeal,
} = require("../controllers/meal.controller.js");

const mealRouter = express.Router();

mealRouter.post(":id", createMeal);
mealRouter.get("", getAllMeals);
mealRouter.get(":id", getMealById);
mealRouter.patch(":id", updateMeal);
mealRouter.delete(":id", deleteMeal);

module.exports = { mealRouter };
