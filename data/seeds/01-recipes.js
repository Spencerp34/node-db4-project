
exports.seed = function(knex) {
    return knex('recipes').insert([
      { recipe_name: 'Macaroni' },
      { recipe_name: 'PB & J' },
      { recipe_name: 'Cereal' }
    ]);
};
