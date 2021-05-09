require("dotenv").config();
var express = require("express");
var mongoose = require("mongoose");
var db = require("./utils/db");
var logger = require("morgan");
var cors = require("cors");
var helmet = require("helmet");
var tokenRouter = require("./routes/auth.route");

var app = express();

app.use(cors());
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/auth", tokenRouter);

module.exports = app;
