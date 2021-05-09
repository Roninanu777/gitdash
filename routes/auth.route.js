const express = require("express");
const router = express.Router();
const { getToken } = require("../controllers/auth.controller");

router.get("/github", (req, res) => {
  res.redirect(
    `${process.env.GITHUB_REDIRECT_URI}?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_CALLBACK_URI}&scope=${process.env.GITHUB_SCOPE}&state=${process.env.GITHUB_SECRET_STATE}`
  );
});
router.get("/success", (req, res) => {
  res.send("This user is authenticated with github");
});
router.get("/github/callback", getToken);

module.exports = router;
