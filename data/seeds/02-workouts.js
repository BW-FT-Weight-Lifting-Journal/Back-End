exports.seed = function(knex) {
  return knex('workouts')                       
    .then(function () {
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