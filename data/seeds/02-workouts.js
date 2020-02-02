exports.seed = function(knex) {
  // deletes all existing entries
  return knex('users').truncate()
    .then(function () {
      // inserts seed data into local development sqlite3 database
      return knex('workouts').insert([
      {
        id:1,
        workoutName: "upper-body",
        date: "today",
        user_id: 1
      },
      {
        id:2,
        workoutName: "core",
        date: "yesterday",
        user_id: 2
      },
      {
        id:3,
        workoutName: "leg-day",
        date: "tomorrow",
        user_id: 3
      }]);
    });
};