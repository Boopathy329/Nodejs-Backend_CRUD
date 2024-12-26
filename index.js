const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");
const bodyParser = require("body-parser");
// mongodb://localhost:27017/crud

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", userRouter);

mongoose
  .connect("mongodb://localhost:27017/crud")
  .then(() => {
    app.listen(port, () => {
      console.log("Database is connected");
      console.log(`Server is running on port : ${port}`);
    });
  })
  .catch((err) => console.log(err.message));
