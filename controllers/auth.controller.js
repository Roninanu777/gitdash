const fs = require("fs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const pathToKey = path.join(__dirname, "..", "gitdash-rsa-priv.pem");
const PUB_KEY = fs.readFileSync(pathToKey, "utf8");

module.exports = {
  getToken: async (req, res, next) => {
    const code = req.query.code;

    if (!code) {
      res.send({ status: 404, message: "Code not found" });
    }
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
