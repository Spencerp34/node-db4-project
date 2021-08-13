const express = require('express')
const recipesRouter = require('./recipes/recipesRouter')

const server = express()

server.use(express.json())

server.use('/api/recipes', recipesRouter)

server.use('*', (req, res) => {
    res.status(404).json({message: 'api working'})
})


module.exports = server