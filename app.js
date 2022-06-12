// Import libs
const express = require('express')

// Init express app
const app = express()

// Import movie router
const movieRoute = require('./routes/movies')

// Middleware
app.use('/movies', movieRoute)

// Create basic route
app.get('/', (req, res) => {
    let out = '<h1>Basic Node App</h1><h4>Routes</h4>'
    out += '<p><a href="/movies">Movies</a>'
    res.send(out)
})

// Start server
app.listen(3000, () => {
    console.log('App is running ... cool')
})