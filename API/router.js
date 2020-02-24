const express = require('express')
const router = express.Router();
const crypt = require('bcryptjs');
const AuthRouter = require('./auth-router.js');
const UserRouter = require('./user-router.js');

router.use('/auth', AuthRouter)
router.use('/users', UserRouter)
router.use(express.json());

module.exports=router