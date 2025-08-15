module.exports = (sequelize, Sequelize) => {
  const Terms = sequelize.define(
    "Terms",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      content_en: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      content_sv: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: "terms",
      timestamps: true,
    }
  );

  return Terms;
};
