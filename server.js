const express = require('express');
const server = express()

const Router = require ('./API/router')



server.use('/api', Router);
server.get('/', (req, res) => {
    res.send(`SERVER START POINT`)
})

module.exports = server