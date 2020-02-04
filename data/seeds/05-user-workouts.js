
exports.seed = function(knex) {
  return knex('user-workouts')                        
    .then(function () {
      return knex('user-workouts').insert([                        
        {
          id: 1,
          user_id: 1,
          workout_id: 2,
          date: 'today'
        },
        {
          id: 2,
          user_id: 2,
          workout_id: 1,
          date: 'tomorrow'
        },
        {
          id: 3,
          user_id: 3,
          workout_id: 3,
          date: 'yesterday'
        },
      ]);
    });
};
