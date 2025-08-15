const express = require("express");
const router = express.Router();
const { Terms } = require("../models");

// Get all terms
router.get("/", async (req, res) => {
  try {
    const terms = await Terms.findAll();
    res.json(terms);
  } catch (error) {
    console.error("Error fetching terms:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get terms by language
router.get("/:language", async (req, res) => {
  try {
    const { language } = req.params;

    // Validate language parameter
    if (!["en", "sv"].includes(language)) {
      return res.status(400).json({ error: "Invalid language. Use 'en' or 'sv'" });
    }

    let terms = await Terms.findAll({
      attributes: ["id", `content_${language}`],
    });

    // Auto-seed if no terms found
    if (terms.length === 0) {
      console.log("No terms found, auto-seeding database...");
      const seedTerms = require("../seeders/terms-seeder");
      await seedTerms();

      terms = await Terms.findAll({
        attributes: ["id", `content_${language}`],
      });
    }

    res.json(terms);
  } catch (error) {
    console.error("Error fetching terms by language:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
