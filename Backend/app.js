const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cookiesparser = require("cookie-parser")

const app = express();
const connectToDb = require("./db/db");
const cors = require("cors");

const userRoutes = require("./routes/user.route");

connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesparser())

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);


module.exports = app;
