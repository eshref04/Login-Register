const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    email: String,
    name: String,
    password: String
  });

  const blogModel = mongoose.model("User",blogSchema)
  module.exports = blogModel