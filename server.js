const express = require('express');
const session = require('express-session');
const helmet = require('helmet');
const connectKnex = require('connect-session-knex')(session);
const Router = require('./API/router');
const db = require('./data/dbConfig');

const server = express();

const sessionConfig = {
    name: "mamba",
    secret: "secret secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 10,
        secure: false, //false for dev, true for production
        httpOnly: true //JS has no access to cookie
    },
    store: new connectKnex({
        db,
        tablename: "sessionStore",
        createtable: true,
        sidefieldname: "sid",
        clearInterval: 1000 * 60 * 15,
    }),
};


server.use(helmet());
server.use(session(sessionConfig));
server.use(express.json())
server.use('/api', Router);


server.get('/', (req, res) => {
    res.send(`SERVER START POINT`)
})


module.exports = server