const crypt = require('bcryptjs');
const Users = require('../data/user-model');

module.exports = (req, res, next) => {
    let { username, password } = req.headers;
    if (username && password) {
        Users.findBy({ username })
            .first()
            .then(user => {
                if (user && crypt.compareSync(password, user.password)) {
                    next()
                } else {
                    res.status(401).json({ error: "You shall not pass!" })
                }
            })
            .catch(({ name, message, stack }) => {
                console.log(err)
                res.status(500).json({ name, message, stack })
            })
    } else {
        res.status(400).json({ error: "invalid credentials" })
    }
};