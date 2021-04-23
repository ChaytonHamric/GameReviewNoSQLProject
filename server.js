const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
console.log("WHAT UP");

const app = express();
const path = require("path");
const review_Router = require("./routes/review.route");
const title_Router = require("./routes/title.route");

// viewed at http://localhost:8080
app.use(express.static(path.join(__dirname + "/build/")));
app.use("/reviews", review_Router);
app.use("/games", title_Router);
app.use(bodyParser.json());
app.use(cors());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

mongoose
  .connect(
    "mongodb+srv://Admin:admin123@gamereviewsite.xhhn6.mongodb.net/Game-Review?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
