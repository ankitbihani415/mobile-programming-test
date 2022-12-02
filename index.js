const express = require("express");
require("./db");
const userRouter = require("./routes/users");
const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("hello from server");
});

app.use("/users", userRouter);

app.listen(3000);
