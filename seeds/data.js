/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('game_sessions').del()
  await knex('users_game_sessions').del()

  await knex('users').insert([
    { username: 'clopez123', password: 'hgnfgzg', email: 'clopez123@gmail.com' },
    { username: 'elu234', password: 'jytfgzhg', email: 'elu234@yahoo.com' },
    { username: 'agarciany', password: 'nrgdhs', email: 'agarciany@outlook.com' },
    { username: 'bigboy583', password: 'gngdfsdv', email: 'bigboy583@gmail.com' },
    { username: 'looterguy0233', password: 'ijyhge', email: 'looterguy0233@yahoo.com' },
    { username: 'gsquad34', password: 'aesdrgtfgh', email: 'gsquad34@outlook.com' },
    { username: 'xXgogogoXx', password: 'gnnbvcdxs', email: 'xXgogogoXx@gmail.com' },
    { username: 'thieflord86', password: 'wdefrgth', email: 'thieflord86@yahoo.com' },
    { username: 'h3lson94', password: 'poiedf', email: 'h3lson94@outlook.com' },
    { username: 'sinnombre67', password: 'qwertyuiop', email: 'sinnombre67@gmail.com' },
  ]);

  await knex('game_sessions').insert([
    { total_score: 120, total_rounds: 1 },
    { total_score: 520, total_rounds: 5 },
    { total_score: 720, total_rounds: 6 },
    { total_score: 320, total_rounds: 3 },
    { total_score: 140, total_rounds: 1 },
    { total_score: 1240, total_rounds: 11 },
    { total_score: 1240, total_rounds: 10 },
    { total_score: 432, total_rounds: 5 },
    { total_score: 520, total_rounds: 6 },
    { total_score: 920, total_rounds: 8 },
  ])

  await knex('users_game_sessions').insert([
    { user_id: 1, game_id: 1, user_score: 30 },
    { user_id: 2, game_id: 1, user_score: 50 },
    { user_id: 3, game_id: 1, user_score: 10 },
    { user_id: 4, game_id: 1, user_score: 60},
    { user_id: 5, game_id: 2, user_score: 34 },
    { user_id: 6, game_id: 2, user_score: 85 },
    { user_id: 7, game_id: 2, user_score: 95 },
    { user_id: 8, game_id: 2, user_score: 12 },
    { user_id: 9, game_id: 3, user_score: 56 },
    { user_id: 10, game_id: 3, user_score: 96 },
    { user_id: 1, game_id: 3, user_score: 23 },
    { user_id: 2, game_id: 3, user_score: 94 },
  ]);

};

