const express = require('express')

const router = express.Router()

router.get('/', (req,res) => {
    res.send('Movies main route')
})

module.exports = router