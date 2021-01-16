const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: String,
    token_details: {
      type: Object,
      default: {},
    },
    email: String,
    address: {
      city: String,
      country: String,
    },
    status: String,
    github_details: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
