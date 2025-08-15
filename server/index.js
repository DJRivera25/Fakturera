const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { sequelize } = require("./models");
const corsOptions = require("./config/cors");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const termsRoutes = require("./routes/terms");
const pricelistRoutes = require("./routes/pricelist");

// Use routes
app.use("/api/terms", termsRoutes);
app.use("/api/pricelist", pricelistRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// Seed database endpoint
app.post("/api/seed", async (req, res) => {
  try {
    const seedTerms = require("./seeders/terms-seeder");
    const seedPricelist = require("./seeders/pricelist-seeder");

    console.log("Starting database seeding...");

    // Sync database
    await sequelize.sync({ alter: true });
    console.log("Database synchronized.");

    // Run seeders
    await seedTerms();
    await seedPricelist();

    console.log("All seeds completed successfully!");
    res.json({ status: "OK", message: "Database seeded successfully" });
  } catch (error) {
    console.error("Error seeding database:", error);
    res.status(500).json({ status: "ERROR", message: "Failed to seed database", error: error.message });
  }
});

// Database connection and server start
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");

    // Sync database (in production, use migrations instead)
    await sequelize.sync({ alter: true });
    console.log("Database synchronized.");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

startServer();
