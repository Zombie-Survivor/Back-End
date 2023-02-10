const express = require("express")
const router = express.Router()
const { getTopSessionsScores, getUsersTopScores } = require("../controllers/gameScoreController.js")

router.get('/', getTopSessionsScores)
router.get('/user/:id', getUsersTopScores)

module.exports = router