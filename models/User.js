const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: String,
    email: String,
    username: String,
    avatar_url: String,
    gravatar_id: String,
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("User", userSchema);
