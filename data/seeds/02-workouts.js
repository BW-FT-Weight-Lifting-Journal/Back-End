exports.seed = function(knex) {
  // deletes all existing entries
  return knex('workouts').truncate()
    .then(function () {
      // inserts seed data into local development sqlite3 database
      return knex('workouts').insert([
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