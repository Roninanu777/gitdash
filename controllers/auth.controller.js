const fs = require("fs");
const path = require("path");
const axios = require("axios");
const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
const pathToKey = path.join(__dirname, "..", "gitdash-rsa-pub.pem");
const PUB_KEY = fs.readFileSync(pathToKey, "utf8");

module.exports = {
  getToken: async (req, res, next) => {
    const code = req.query.code;

    if (!code) {
      res.send({ status: 404, message: "Code not found" });
    }

    const response = await axios.post(
      `${process.env.GITHUB_TOKEN_URI}/code=${code}&state=${process.env.GITHUB_SECRET_STATE}&client_id=${process.env.GITHUB_CLIENT_ID}`
    );

    console.log(code);

    res.send(`The code is ${code}`);
  },

  isAuth: async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new Error("not authenticated");
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      throw new Error("not authenticated");
    }

    try {
      const payload = jwt.verify(token, PUB_KEY);
      req.userId = payload.userId;
      next();
      return;
    } catch {}

    throw new Error("not authenticated");
  },
};
