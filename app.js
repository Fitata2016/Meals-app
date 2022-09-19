const express = require("express");

const { userRouter } = require("./routes/user.routes");
const { restaurantRouter } = require("./routes/restaurant.routes");
const { mealRouter } = require("./routes/meal.routes");
const { orderRouter } = require("./routes/order.routes");

const app = express();

app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/restaurants", restaurantRouter);
app.use("/api/v1/meals", mealRouter);
app.use("/api/v1/orders", orderRouter);

app.all("*", () => {
  res.status(404).json({
    status: "error",
    message: `${req.method}${req.url} does not exist in our server`,
  });
});

module.exports = { app };
