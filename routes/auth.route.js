const express = require("express");
const router = express.Router();
const { getToken } = require("../controllers/auth.controller");

router.get("/callback", getToken);

module.exports = router;
