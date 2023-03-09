import express, { Application } from "express";
require("dotenv").config();
const dbConnect = require("./config/db");
const userRoute = require("./routes/userRoute");

const app: Application = express();
const port: Number = 4001;

app.use("/api/users", userRoute);
dbConnect;
app.listen(port, () => {
  console.log(`connected successffully on port ${port}`);
});
