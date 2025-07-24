const axios = require("axios");
const Article = require("../models/Article");

const NEWS_API = process.env.NEWS_API_KEY;
const NEWS_URL = `https://newsapi.org/v2/everything?q=technology&language=en&sortBy=publishedAt&apiKey=${NEWS_API}`;

const fetchAndStoreNews = async (req, res, next) => {
  try {
    const { data } = await axios.get(NEWS_URL);
    console.log("NewsAPI articles length:", data.articles.length); // Add this

    console.log("NewsAPI articles length:", data.articles.length);
    const articles = data.articles;

    await Article.deleteMany({});
    const inserted = await Article.insertMany(articles, { ordered: false });
    console.log("Inserted articles:", inserted.length);

    res.json({ message: "News fetched and stored." });
  } catch (err) {
    res.status(500).json({ error: err.message });
    next(err);
  }
};

const getAllNews = async (req, res, next) => {
  try {
    const articles = await Article.find().sort({ publishedAt: -1 }).lean();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

const getLatestNews = async (req, res, next) => {
  try {
    const latest = await Article.find()
      .sort({ publishedAt: -1 })
      .limit(10)
      .lean();
    res.json(latest);
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

const searchNews = async (req, res, next) => {
  try {
    const q = req.query.q;
    const results = await Article.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
      ],
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

const deleteAll = async (req, res, next) => {
  try {
    await Article.deleteMany({});
    res.json({ message: "All articles deleted." });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};
module.exports = {
  fetchAndStoreNews,
  getAllNews,
  getLatestNews,
  searchNews,
  deleteAll,
};
