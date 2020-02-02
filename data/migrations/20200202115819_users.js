// user tables including the join table for user/workouts

exports.up = function(knex) {
  return knex.schema.createTable('users', user => {

    user.increments();

    user.string("email").notNullable().unique();

    user.string('password').notNullable();

    user.string('name');

    user.string('avatarURL');

  })

  .createTable('user-workouts', userRoutines => {

    userRoutines.increments();

    userRoutines.integer('user_id') // will this foreign key reference at top of table be an issue?
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users") // will this table reference be an issue?
      .onDelete("CASCADE") // CASCADE will delete all related entries
      .onUpdate("CASCADE");

    userRoutines.integer('workout_id') // will this foreign key reference at top of table be an issue?
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("workouts") // will this table reference be an issue?
      .onDelete("CASCADE") // CASCADE will delete all related entries
      .onUpdate("CASCADE");

    userRoutines.string('date'); //Change to knex date-type for stretch.

  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("user-workouts")
};