const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

// Midlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Running from Better Life Server.");
});

app.post("/login", (req, res) => {
  const user = req.body;

  const accessToken = jwt.sign(user, process.env.JWT_ACCESS_TOKEN, {
    expiresIn: "1d",
  });

  res.send({ accessToken });
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
