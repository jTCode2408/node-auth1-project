//login register routes here

const router = require('express').Router();
const crypt = require('bcryptjs');

const Users = require('../data/user-model');


router.post('/register', (req, res) => {
    let user = req.body;
    console.log(user)
    const hash = crypt.hashSync(user.password, 8)
    user.password = hash
    
    Users.add(user)
        .then(adding => {
            res.status(201).json(adding)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error:"unable to register user"})
    })

})



router.post('/login', (req, res) => {
    let { username, password } = req.body
    Users.findBy({username})
        .first()
        .then(user => {
            if (user && crypt.compareSync(password, user.password)) { 
                res.status(200).json({LoggedIn: `ID: ${user.id}, Username:${user.username}, HashedPass: ${user.password}`})
            } else {
               res.status(401).json({error:"You shall not pass!"}) 
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "You shall not pass!" })
        })
    
})



module.exports = router;