const express = require("express");
const app = express();

// Register View Engine
app.set("view engine", "ejs");

app.listen(3000);

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
