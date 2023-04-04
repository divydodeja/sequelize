const express = require("express");
const bodyParser = require("body-parser");
require("./models/index")

const userController = require("./controllers/user");

const app = express();
app.use(bodyParser.json());

app.post("/add", userController.addUser);
app.get("/view", userController.getUsers);
app.get("/view/:id", userController.getUser);
app.post("/update/:id", userController.updateUser);
app.post("/delete", userController.deleteUser);

app.listen(3000);
