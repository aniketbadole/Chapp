const express = require("express");
const usersRouter = require("./routes/users.route");
const app = express();

app.use(express.json());
app.use("/users", usersRouter);

console.log("This is of no use to anyone.");

module.exports = app;
