exports.seed = function(knex) {
  return knex('exercises').truncate()                          // deletes all existing entries
    .then(function () {
      return knex('exercises').insert([                        // inserts seed data into local development sqlite3 database
      {
        id:1,
        exerciseName: "push-ups",
        musclesName: "pectorals, triceps, biceps, abs",
        completed: false
      },
      {
        id:2,
        exerciseName: "dead-lifts",
        musclesName: "back, hamstrings, shoulders",
        completed: false
      },
      {
        id:3,
        exerciseName: "curls",
        musclesName: "biceps, forearms",
        completed: false
      },
      {
        id:4,
        exerciseName: "shoulder-press",
        musclesName: "back, shoulders, neck",
        completed: false
      },
      {
        id:5,
        exerciseName: "situps",
        musclesName: "back, abs, sides",
        completed: false
      },
      {
        id:6,
        exerciseName: "box-jumps",
        musclesName: "back, hamstrings, arms",
        completed: false
      },
    ]);
    });
};