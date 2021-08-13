const db = require('../../data/db-config')

async function getByID(id){
    const results = await db('recipes as r')
        .join('steps as st', 'r.recipe_id', 'st.recipe_id')
        .join('step_ingredients as si', 'st.step_id', 'si.step_id')
        .join('ingredients as i', 'si.ingredient_id', 'i.ingredients_id')
        .where('r.recipe_id', id)
        .select('r.recipe_id', 'r.recipe_name', 'st.step_number', 'st.step_id', 'st.step_directions', 'i.ingredient_name', 'si.quantity', 'r.creation_time')
        .orderBy('st.step_number');

    const formattedData = {
        recipe_id: results[0].recipe_id,
        recipe_name: results[0].recipe_name,
        created_time: results[0].creation_time,
        steps: []
    }

    results.forEach( (row, i) => {
        

        if(row){


            const eggs = {
                step_id: row.step_id,
                step_number: row.step_number,
                step_directions: row.step_directions,
                ingredients: []
            }
            
            // const number = results[i].step_number -1

            eggs.ingredients.push({
                ingredient_id: row.ingredient_id,
                ingredient_name: row.ingredient_name,
                quantity: row.quantity
            })

            formattedData.steps.push(eggs)

            console.log('formattedData', formattedData)
            // console.log('number', number)
            // console.log('last',formattedData.steps[number])
        }
    })
     return formattedData
}

module.exports = {
    getByID
}