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

function insert(user) {
  return db('users')
    .insert(user)
    .then(ids => {
      console.log(ids)
      return ids[0]
    })
}


// takes workoutname, date, and userid
function addWorkout(workoutName, date, userID) {
  return db("workouts")
    .insert({
      user_id: userID,
      date: date
    })
    .then(workout => {
      return workout[0]
    })
}
