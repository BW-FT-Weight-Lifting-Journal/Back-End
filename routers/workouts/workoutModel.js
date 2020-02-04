const db = require("../../data/dbConfig.js");


//Find a unique workout => which will show you list of all exercises. 
const findByID = (id) => {                                          
  return db("workouts")        
  .where(id);                                                     
};    

//updates a workoout
const update = (id, changes) => {
  return db("workouts")
  .where(id)
    .update(changes, "id")
    .then(res => {
      if (res) {
        return findByID(id);
      } else {
        return undefined;
      };
    });
  };

  // deletes a workout
const deleteWorkout = (id) => {
  return findByID(id)
  .then(res => {
    if (res) {
        return db("workouts")
          .where(id)
          .del();
        }
      });
    };
//Adds an exercise to a specific workout

function addExercise(exercise, workout_id) {
  return db('exercises')
    .insert(exercise, "id")
    .then(ids => {
      return db('workout-exercises')
        .insert({exercise_id: ids[0], workout_id}, "id")
          .then(id => {
              return id[0]
          })
    })
}

  module.exports = { 
  addExercise,                                         
  findByID,
  // insert,
  update,
  deleteWorkout
  };
