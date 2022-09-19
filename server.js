const { app } = require("./app");
const { db } = require("./utils/database.utils");
const dotenv= require ("dotenv")

dotenv.config({path:"./config.env"})

const startServer = async () => {
  try {
    await db.authenticate().then((res = console.log("authenticated")));
    await db.sync().then((res = console.log("synced")));
    const PORT = 4000;
    app.listen(PORT, () => {
      console.log("Express app running");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
