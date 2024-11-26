const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: "backend/config/config.env" });

//using middlewares
app.use(express.json({limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your front-end origin
    credentials: true, // Allow credentials (cookies) to be included
  })
);



// importing route
const post = require("./routes/post");
const user = require("./routes/user");

// using Routes
app.use("/api/v1", post);
app.use("/api/v1", user);

module.exports = app;
