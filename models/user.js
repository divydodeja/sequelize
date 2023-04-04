module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "User",
    {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        default: "test@gmail.com",
      },
    },
    {
      paranoid: true,
    }
  );
};
