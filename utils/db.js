const mongoose = require("mongoose");

const MONGO_USERNAME = "redoc";
const MONGO_PASSWORD = "redoc";
const MONGO_DB = "gitdash";

const url = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@store-locator.5aenw.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((resp) => {
    console.log("MongoDb connected...");
  });
