const UserModel = require("../models/userModel.js")

const getAllUsers = async (req, res) => {
  const users = await UserModel.getAllUsersFromDB()
  res.send(users)
}

module.exports = {
  getAllUsers
}