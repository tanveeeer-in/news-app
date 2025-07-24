const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: Date,
  source: {
    id: String,
    name: String,
  },
});

module.exports = mongoose.model("Article", ArticleSchema);
