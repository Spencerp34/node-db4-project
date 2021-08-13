
exports.seed = function(knex) {
  return knex('steps').insert([
    { step_directions: "Boil noodles for 8-10 minutes and drain", step_number: 1, recipe_id: 1}, 
    { step_directions: "Add Cheese until its melty and delicious ", step_number: 2, recipe_id: 1}, 
    { step_directions: "Spread Peanut Butter on one Slice of Bread", step_number: 1, recipe_id: 2}, 
    { step_directions: "Spread Jelly on the other Slice of Bread", step_number: 2, recipe_id: 2}, 
    { step_directions: "Put two slices together. (optional) Cut off crusts ", step_number: 3, recipe_id: 2}, 
    { step_directions: "Pour recommended serving of Cereal into Bowl", step_number: 1, recipe_id: 3}, 
    { step_directions: "Pour Milk into same bowl until milk is just below cereal level.", step_number: 2, recipe_id: 3}, 
  ]);
};
