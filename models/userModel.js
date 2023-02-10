const pool = require("../db.js")

class UserModel {
  static async getAllUsersFromDB(){
    const query = await pool.query("SELECT * FROM users")
    return query.rows
  }
}

module.exports = UserModel