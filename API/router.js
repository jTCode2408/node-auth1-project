const express = require('express')
const router = express.Router();
const crypt = require('bcryptjs');
const AuthRouter = require('./auth-router.js');
const UserRouter = require('./user-router.js');
const restricted = require('./middleware')

router.use('/auth', AuthRouter)
router.use('/users', restricted, UserRouter)
router.use(express.json());

// router.get('/hash', (req, res) => {
//     //read authN header
//     const authentication = req.headers.authentication
//     //hash value from header
//     const hash = crypt.hashSync(authentication, 8)
//     res.json({orginal: authentication, hashed: hash})
// })

module.exports=router 