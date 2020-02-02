const db = require("../data/dbConfig.js");

// ADD a user
const insert = user => {
  return db("users").insert(user, "id");
};

// Helper function to find a user
const find = () => {
  return db("users");
};

// Helper function to return a user where 'prop' exists
const getBy = prop => {
  return db("users")
    .where(prop)
    .first();
};

// Edit a user
const update = (id, changes) => {
  return db("users")
    .where(id)
    .update(changes)
    .then(res => {
      console.log("res", res, id);
      if (res === 1) {
        return getBy(id);
      } else {
        return undefined;
      }
    });
};

// Delete a user
const deleteUser = id => {
  return getBy(id).then(res => {
    console.log(res);
    if (res) {
      return db("users")
        .where(id)
        .del();
    }
  });
};

module.exports = {
  insert,
  getBy,
  update,
  deleteUser,
  find
};