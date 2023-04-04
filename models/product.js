module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define(
    "Products",
    {
      productId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );
};
