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
        .select("w.id as workoutId", "u.name", "w.workoutName", "uw.date");
}

//Adding a user

function insert(user) {
  return db('users')
    .insert(user, "id")
    .then(ids => {
      console.log(ids)
      return ids[0]
    })
}

function addWorkout(workout, user_id) {
  return db('workouts')
    .insert(workout, "id")
    .then(ids => {
      return db('user-workouts')
        .insert({workout_id: ids[0], user_id}, "id")
          .then(id => {
              return id[0]
          })
    })
}
