require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth.route");
const sessionRoutes = require("./routes/session.route");
const questionRoutes = require("./routes/question.route");

const { protect } = require("./middlewares/auth.middleware");
const {
  generateInterviewQuestions,
  generateConceptExplanation,
} = require("./controllers/ai.controller");

const app = express();

// Connect DB
connectDB();

// CORS - FIXED FOR PRODUCTION + LOCAL
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://interview-frontend-1lsw.onrender.com",
      "https://interview-frontend-11sw.onrender.com"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder for uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Test route
app.get("/test", (req, res) => {
  res.json({ message: "CORS working, Server running" });
});

// Main routes
app.use("/api/auth", authRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/questions", questionRoutes);

// AI routes
app.post("/api/ai/generate-questions", protect, generateInterviewQuestions);
app.post("/api/ai/generate-explanation", protect, generateConceptExplanation);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});