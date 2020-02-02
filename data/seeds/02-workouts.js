exports.seed = function(knex) {
  return knex('workouts').truncate()                          // deletes all existing entries
    .then(function () {
      return knex('workouts').insert([                        // inserts seed data into local development sqlite3 database
      {
        id:1,
        workoutName: "upper-body",
      },
      {
        id:2,
        workoutName: "core",
      },
      {
        id:3,
        workoutName: "leg-day",
      }]);
    });
};