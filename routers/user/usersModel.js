const db = require("../../data/dbConfig.js");

module.exports = {                                            
 insert,
 getBy,
 getWorkoutsList,
 addWorkout,
};

//Takes user to his workouts

function getBy(filter) {
  return db('users').where(filter);
}

///Joining users to workouts

function getWorkoutsList(id){
  return db("user-workouts as uw")
        .join("users as u", "uw.user_id", "u.id")
        .join("workouts as w", "uw.workout_id", "w.id")
        .where("u.id", id)
        .select("u.name", "w.workoutName", "uw.date");
}

//Adding a user

function insert(user) {
  return db('users')
    .insert(user)
    .then(ids => {
      console.log(ids)
      return ids[0]
    })
}

// function addWorkout(workout) {
//   return db('user-workouts as uw')
//     .join('workouts as w', 'uw.workout_id', 'w.id')
//     .insert(workout)
//     .then(ids => {
//       return ids[0]
//     })
// }
