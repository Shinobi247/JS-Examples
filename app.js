const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// express app
const app = express();

// connect to mongodb
// const dbURI =
//   "mongodb+srv://rahul:rahul247@cluster0.10afx.mongodb.net/node-tuts?retryWrites=true&w=majority";
const dbURI =
  "mongodb://rahul:rahul247@cluster0-shard-00-00.10afx.mongodb.net:27017,cluster0-shard-00-01.10afx.mongodb.net:27017,cluster0-shard-00-02.10afx.mongodb.net:27017/node-tuts?ssl=true&replicaSet=atlas-10oidf-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Connected to DB");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

// Register View Engine
app.set("view engine", "ejs");

// moddleware & static files
app.use(express.static("public"));

app.use(morgan("dev"));

app.get("/", (req, res) => {
  const blogs = [
    { title: "Blog 1", snippet: "Snippet 1" },
    { title: "Blog 2", snippet: "Snippet 2" },
    { title: "Blog 3", snippet: "Snippet 3" },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "New Blog" });
});

// 404
app.use((req, res) => {
  res.status(404).render("404", { title: "Error" });
});
