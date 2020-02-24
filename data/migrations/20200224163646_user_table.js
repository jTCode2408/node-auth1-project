
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments()
        tbl.string('username', 155)
            .notNullable()
            .unique();
        
        tbl.string('password', 155)
            .notNullable();

    })
    
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
