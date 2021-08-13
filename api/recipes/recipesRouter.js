const router = require('express').Router()
const Recipe = require('./recipesModel')


router.get('/:id', async(req, res) => {
    const recipe = await Recipe.getByID(req.params.id)
    res.status(200).json(recipe)

})


router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong in recipes',
        message: err.message
    })
})

module.exports = router