
exports.seed = function(knex) {
  return knex('workout-exercises')                          
    .then(function () {
      return knex('workout-exercises').insert([                        
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