
exports.seed = function(knex) {
  return knex('workout-exercises').truncate()                          // deletes all existing entries
    .then(function () {
      return knex('workout-exercises').insert([                        // inserts seed data into local development sqlite3 database
        {
          id: 1,
          workout_id: 2,
          exercise_id: 2,
        },
        {
          id: 2,
          workout_id: 1,
          exercise_id: 1,
        },
        {
          id: 3,
          workout_id: 3,
          exercise_id: 3,
        },
      ]);
    });
};