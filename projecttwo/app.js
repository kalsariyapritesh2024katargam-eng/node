const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mongoose")
  .then(() => {
    console.log("connection success");
  })
  .catch((error) => {
    console.log(error);
  });

var UC = require("./controller/controller");

app.get("/", UC.loginPage);

app.get("/signUp", UC.signUp);

app.get("/signupUser", UC.signupUser);

app.get("/loginUser", UC.loginUser);

app.get("/dashboard", (req, res) => {
  res.send("Welcome to Dashboard");
});

app.get("/logout", UC.logout);

app.listen(3000);
