const express = require("express");
const router = express.Router();
const { Pricelist } = require("../models");

// Get all pricelist items
router.get("/", async (req, res) => {
  try {
    const { search, articleSearch } = req.query;
    let whereClause = { isActive: true };

    if (search) {
      whereClause.productService = {
        [require("sequelize").Op.iLike]: `%${search}%`,
      };
    }

    if (articleSearch) {
      whereClause.articleNo = {
        [require("sequelize").Op.iLike]: `%${articleSearch}%`,
      };
    }

    const pricelist = await Pricelist.findAll({
      where: whereClause,
      order: [["articleNo", "ASC"]],
    });

    res.json(pricelist);
  } catch (error) {
    console.error("Error fetching pricelist:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get single pricelist item
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Pricelist.findByPk(id);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json(item);
  } catch (error) {
    console.error("Error fetching pricelist item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create new pricelist item
router.post("/", async (req, res) => {
  try {
    const { articleNo, productService, inPrice, price, unit, inStock, description } = req.body;

    const newItem = await Pricelist.create({
      articleNo,
      productService,
      inPrice: parseFloat(inPrice) || 0,
      price: parseFloat(price) || 0,
      unit,
      inStock: parseInt(inStock) || 0,
      description,
    });

    res.status(201).json(newItem);
  } catch (error) {
    console.error("Error creating pricelist item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update pricelist item
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { articleNo, productService, inPrice, price, unit, inStock, description } = req.body;

    const item = await Pricelist.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    await item.update({
      articleNo,
      productService,
      inPrice: parseFloat(inPrice) || 0,
      price: parseFloat(price) || 0,
      unit,
      inStock: parseInt(inStock) || 0,
      description,
    });

    res.json(item);
  } catch (error) {
    console.error("Error updating pricelist item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete pricelist item (soft delete)
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Pricelist.findByPk(id);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    await item.update({ isActive: false });
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Error deleting pricelist item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

