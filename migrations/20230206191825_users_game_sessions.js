/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users_game_sessions', function (table) {
        table.increments().primary();
        table.integer('user_id')
        table.integer('game_id')
        table.foreign('user_id').references('id').inTable('users');
        table.foreign('game_id').references('id').inTable('game_sessions');
        table.string('user_score')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users_game_sessions')
};
