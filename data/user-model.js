const db = require('./dbConfig')

module.exports = {
    add,
    find,
    findById,
    findBy
}

function find() {
    return db('users')
}

function findById(id) {
    return db('users').select('id', 'username')
        .where({ id })
        .first();
}

function add(user) {
    return db('users').insert(user, 'id')
        .then(userIDs => {
            const [id] = userIDs
            return findById(id)
        })

}

function findBy(userFilter) {
    return db('users').select('id', 'username', 'password')
        .where(userFilter);
}