
exports.seed = function(knex) {
  return knex('ingredients').insert([
    { ingredient_name: "Noodles" },
    { ingredient_name: "Cheese" },
    { ingredient_name: "Bread" },
    { ingredient_name: "Peanut Butter" },
    { ingredient_name: "Jelly" },
    { ingredient_name: "Cheerios or other cereal" },
    { ingredient_name: "Milk" }
  ]);
};