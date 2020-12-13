require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

//initialize express
const app = express();

//initialize middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`);
});
