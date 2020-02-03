//                                                                        WORKOUT, EXERCISES, SETS, and WORKOUT-EXERCISES TABLE CREATION for DB
exports.up = function(knex) {
  return knex.schema.createTable('workouts', workout => {

    workout.increments();

    workout.string("workoutName").notNullable().index();

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
       .onDelete("CASCADE") 
       .onUpdate("CASCADE");

  })

  .createTable('workout-exercises', routines => {

    routines.increments();

    routines.integer("workout_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("workouts")
        .onDelete("CASCADE") 
        .onUpdate("CASCADE");

    routines.integer('exercise_id')
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("exercises")
        .onDelete("CASCADE") 
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