module.exports = (sequelize, Sequelize) => {
  const Pricelist = sequelize.define(
    "Pricelist",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      articleNo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      productService: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      inPrice: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
      },
      unit: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "piece",
      },
      inStock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "pricelist",
      timestamps: true,
    }
  );

  return Pricelist;
};
