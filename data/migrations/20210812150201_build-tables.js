
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', (table) => {
        table.increments('recipe_id')
        table.string('recipe_name', 128).unique().notNullable()
        table.timestamp('creation_time').defaultTo(knex.fn.now()).notNullable()
    })
    .createTable('ingredients', (table) => {
        table.increments('ingredients_id')
        table.string('ingredient_name').unique().notNullable()
    })
    .createTable('steps', (table) => {
        table.increments('step_id')
        table.string('step_directions', 356).notNullable()
        table.integer('step_number').notNullable()
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
    .createTable('step_ingredients', (table) => {
        table.increments('process_id')
        table.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredients_id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        table.string('quantity', 50)
            .notNullable()
    })
    
};

exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('step_ingredients')
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};
