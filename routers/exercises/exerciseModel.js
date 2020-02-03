const db = require("../../data/dbConfig.js");


//Finds a unique exercise ID
const findByID = (id) => {                                          
  return db("exercises")        
  .where(id);                                                     
};    

//Updates an exercise
const update = (id, changes) => {
  return db("exercises")
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

//Deletes an exercise

const deleteExercise = (id) => {
  return findByID(id)
  .then(res => {
    if (res) {
        return db("exercises")
          .where(id)
          .del();
        }
      });
    };

  module.exports = {                                          
  findByID,
  update,
  deleteExercise
  };
