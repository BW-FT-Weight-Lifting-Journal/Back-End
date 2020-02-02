//                                                                        USERS, and USER-WORKOUTS TABLE CREATION for DB

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

    userRoutines.integer('user_id') 
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users") 
      .onDelete("CASCADE") 
      .onUpdate("CASCADE");

    userRoutines.integer('workout_id') 
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("workouts") 
      .onDelete("CASCADE") 
      .onUpdate("CASCADE");

    userRoutines.string('date');                                              //  Change to knex date-type for stretch.

  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("user-workouts")
};