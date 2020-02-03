const db = require("../../data/dbConfig.js");

// const find = () => {          
//   return db("exercises");
// };

//Find by id. It will take you to exercise page, where list of sets would be displayed


//Joins here.
const findByID = (id) => {                                          
  return db(table)        
    .where(id);                                                     
};     

//Adding an exercise
const insert = exercise => {
  return db("exercises").insert(exercise, "id");
};

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

const deleteExercise = (id) => {
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
  find,
  findByID,
  insert,
  update,
  deleteExercise,
};