exports.seed = function(knex) {
  return knex('sets').truncate()                          // deletes all existing entries
    .then(function () {
      return knex('sets').insert([                        // inserts seed data into local development sqlite3 database
        {
          id:1,
          reps: 3,
          weight: 15,
          exercise_id: 3
        },
        {
          id:2,
          reps: 3,
          weight: 15,
          exercise_id: 1
        },
        {
          id:3,
          reps: 3,
          weight: 15,
          exercise_id: 2
        },
        {
          id:4,
          reps: 3,
          weight: 15,
          exercise_id: 4
        },     
        {
          id:5,
          reps: 3,
          weight: 15,
          exercise_id: 6
        },
        {
          id:6,
          reps: 3,
          weight: 15,
          exercise_id: 5
        }
      ]);
    });
};