require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const newsRoutes = require("./src/routes/newsRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/news", newsRoutes);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error(err));

mongoose.connection
  .on("connected", () => console.log("DB connected"))
  .on("error", (err) => console.error("DB connection error:", err))
  .on("disconnected", () => console.warn("DB disconnected"));
