const db = require("../../data/dbConfig.js");


//Finds a unique set ID
const findByID = (id) => {                                          
  return db("sets")        
  .where(id);                                                     
};    

//Updates a set
const update = (id, changes) => {
  return db("sets")
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

//Deletes a set

const deleteSet = (id) => {
  return findByID(id)
  .then(res => {
    if (res) {
        return db("sets")
          .where(id)
          .del();
        }
      });
    };

  module.exports = {                                          
  findByID,
  update,
  deleteSet
  };
