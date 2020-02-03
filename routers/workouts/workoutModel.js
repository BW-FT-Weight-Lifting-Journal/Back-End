const db = require("../../data/dbConfig.js");


//Find a unique workout => which will show you list of all exercises. 
const findByID = (id) => {                                          
  return db("workouts")        
  .where(id);                                                     
};     



//Adds a workout
const insert = workout => {
  return db("workouts").insert(workout, "id");
};

//updates a workoout
const update = (id, changes) => {
  return db("workouts")
  .where(id)
    .update(changes)
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
  return getBy(id)
  .then(res => {
    if (res) {
        return db(table)
          .where(id)
          .del();
        }
      });
    };

  module.exports = {                                          
  findByID,
  insert,
  update,
  deleteWorkout
  };
