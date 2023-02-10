const GameScoreModel = require("../models/gameScoreModel.js")

const getTopSessionsScores = async (req, res) => {
  const topSessionScores = await GameScoreModel.getTopSessionsScoresFromDB()
  res.send(topSessionScores)
}

const getUsersTopScores = async (req, res) => {
    const userID = req.params.id
    const usersTopScores = await GameScoreModel.getUsersTopScoresFromDB(userID)
    res.send(usersTopScores)
}

module.exports = {
  getTopSessionsScores,
  getUsersTopScores
}