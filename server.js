const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const bodyParser = require("body-parser");

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURL;
// connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("<h1>Hello DevNet</h1>"));

// Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

app.listen(port, () => console.log(`App started on port ${port}`));