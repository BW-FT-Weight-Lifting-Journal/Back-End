
exports.up = function(knex) {
  return knex.schema.createTable('workouts', workout => {

    workout.increments();

    workout.string("workoutName").notNullable().index();

    workout.string('date'); //Change to knex date-type for stretch.

    workout.integer('user_id') // will this foreign key reference at top of table be an issue?
       .unsigned()
       .notNullable()
       .references("id")
       .inTable("users") // will this table reference be an issue?
       .onDelete("RESTRICT") /// Check up on what happens when deleting whole workout.
       .onUpdate("CASCADE");

  })
  .createTable('exercises', exercise => {

    exercise.increments();

    exercise.string('exerciseName').notNullable().unique();

    exercise.string("musclesName");

    exercise.boolean('completed').defaultTo(false);

  })

  .createTable('sets', set => {

    set.increments();

    set.integer('reps').notNullable();

    set.integer('weight');

    set.integer('exercise_id')
       .unsigned()
       .notNullable()
       .references("id")
       .inTable("exercises")
       .onDelete("RESTRICT") /// Check up on what happens when deleting whole workout.
       .onUpdate("CASCADE");

  })

  .createTable('workout-exercises', routines => {

    routines.increments();

    routines.integer("workout_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("workouts")
        .onDelete("RESTRICT") /// Check up on what happens when deleting whole workout.
        .onUpdate("CASCADE");

    routines.integer('exercise_id')
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("exercises")
        .onDelete("RESTRICT") /// Check up on what happens when deleting whole workout.
        .onUpdate("CASCADE");

  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("workouts")
  .dropTableIfExists("exercises")
  .dropTableIfExists("sets")
  .dropTableIfExists("workout-exercises");

};
