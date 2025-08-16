const seedTerms = require("./seeders/terms-seeder");
const seedPricelist = require("./seeders/pricelist-seeder");
const { sequelize } = require("./models");

async function runSeeds() {
  try {
    console.log("Starting database seeding...");

    // Sync database
    await sequelize.sync({ alter: true });
    console.log("Database synchronized.");

    // Run seeders
    await seedTerms();
    await seedPricelist();

    console.log("All seeds completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error running seeds:", error);
    process.exit(1);
  }
}

runSeeds();

