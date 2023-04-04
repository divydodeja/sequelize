const Sequelize = require("sequelize");

const sequelize = new Sequelize("user", "root", "Simform@123", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("Database Connection Successful"))
  .catch((err) => console.log("Database Connection Failed: " + err));

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user")(sequelize,Sequelize)
db.product = require("./product")(sequelize,Sequelize)


db.sequelize
  .sync({alter: true})
  .then()
  .catch((err) => console.log(err));

module.exports = db