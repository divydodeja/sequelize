const db = require("../models/index");
console.log(db)
// const Sequelize = require("sequelize");

const User = db.user;

exports.addUser = (req, res, next) => {
  const { name, email } = req.body;
  User.create({ name: name, email: email })
    .then(
      res.status(200).json({
        success: "true",
        message: "User added Successfully",
      })
    )
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        success: "false",
        message: err,
      });
    });
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: "false",
      message: error,
    });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { userId: req.params.id } });
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: "false",
      message: error,
    });
  }
};

exports.updateUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const user = await User.update(
      { name: name, email: email },
      {
        where: {
          userId: req.params.id,
        },
      }
    );
    res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: "false",
      message: error,
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    await User.destroy({ where: { name: name, email: email } });
    res.status(200).json({
      success: "true",
      message: "User deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: "false",
      message: error,
    });
  }
};

