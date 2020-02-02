
exports.up = function(knex) {
  return knex.schema.createTable('users', user => {

    user.increments();

    user.string("email").notNullable();

    user.string('password').notNullable();

    user.string('name').notNullable();

    user.string('avatarURL');

  })
  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users");
};
