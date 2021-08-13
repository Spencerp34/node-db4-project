exports.seed = function(knex) {
  return knex('step_ingredients').insert([
    { step_id: 1, ingredient_id: 1, quantity: '5oz per person' },
    { step_id: 2, ingredient_id: 2, quantity: '2oz per person' },
    { step_id: 3, ingredient_id: 3, quantity: '2 slices' },
    { step_id: 3, ingredient_id: 4, quantity: '2 Tbsp' },
    { step_id: 4, ingredient_id: 5, quantity: '2 Tbsp' },
    { step_id: 6, ingredient_id: 6, quantity: '2 cups' },
    { step_id: 7, ingredient_id: 7, quantity: '1.5 cups' },
  ]);
};
