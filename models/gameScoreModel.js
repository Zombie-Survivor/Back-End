const pool = require("../db.js")

class GameScoreModel {
  static async getTopSessionsScoresFromDB(){
    const query = await pool.query("SELECT * FROM game_sessions JOIN users_game_sessions ON users_game_sessions.game_id = game_sessions.id JOIN users ON users.id = users_game_sessions.user_id ORDER BY total_score DESC")
    return query.rows
  }

  static async getUsersTopScoresFromDB(id) {
    const query = await pool.query("SELECT * FROM users_game_sessions WHERE users_game_sessions.user_id = $1 ORDER BY user_score DESC", [id])
    return query.rows
  }
}

module.exports = GameScoreModel