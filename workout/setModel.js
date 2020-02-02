const db = require("../data/dbConfig.js");

const find = () => {          
  return db("sets");
};

const findByID = (id) => {                                          
  return db(table)        
    .where(id);                                                     
};     

const insert = set => {
  return db("sets").insert(set, "id");
};

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

const deleteSet = (id) => {
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
  deleteSet,
};