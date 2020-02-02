const db = require("../../data/dbConfig.js");

const find = () => {          
  return db("workouts");
};

const findByID = (id) => {                                          
  return db(table)        
    .where(id);                                                     
};     

const insert = workout => {
  return db("workouts").insert(workout, "id");
};

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
  find,
  findByID,
  insert,
  update,
  deleteWorkout,
};