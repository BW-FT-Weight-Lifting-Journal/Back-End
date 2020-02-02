exports.seed = function(knex) {
  // deletes all existing entries
  return knex('sets').truncate()
    .then(function () {
      // inserts seed data into local development sqlite3 database
      return knex('sets').insert([
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