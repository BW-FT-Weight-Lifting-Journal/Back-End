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
    .update(changes, "id")
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

  //Get Sets

  function getSets(id){
    return db("exercises as e")
          .join("sets as s", "s.exercise_id", "e.id")
          .where("e.id", id)
          .select("s.id as setsId", "s.reps", "s.weight")
  };

  //Add Set

  function addSets(sets) {
    return db('sets')
      .insert(sets, "id")
      .then(ids => {
        console.log(ids)
        return ids[0]
      })
  }

  module.exports = {                                          
  findByID,
  update,
  deleteExercise,
  getSets,
  addSets
  };
