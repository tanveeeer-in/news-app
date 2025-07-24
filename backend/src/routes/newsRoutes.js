const express = require("express");
const router = express.Router();
const {
  fetchAndStoreNews,
  getAllNews,
  getLatestNews,
  searchNews,
  deleteAll,
} = require("../controllers/newsController");

router.post("/fetch", fetchAndStoreNews);
router.get("/", getAllNews);
router.get("/latest", getLatestNews);
router.get("/search", searchNews);
router.delete("/delete", deleteAll);

module.exports = router;
