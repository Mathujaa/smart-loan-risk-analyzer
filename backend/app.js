const express = require("express");
const cors = require("cors");

const app = express();

// middleware MUST be functions
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("App running fine 🚀");
});

module.exports = app;
