const db = require("../data/dbConfig.js");

// ADD a Workout
const insert = workout => {
  return db("workouts").insert(workout, "id");
};

// Helper function to find a Workout
const find = () => {
  return db("workouts");
};

// Helper function to return a Workout where 'prop' exists
const getBy = prop => {
  return db("workouts")
    .where(prop)
    .first();
};

// Edit a Workout
const update = (id, changes) => {
  return db("workouts")
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

// Delete a Workout
const deleteWorkout = id => {
  return getBy(id).then(res => {
    console.log(res);
    if (res) {
      return db("workouts")
        .where(id)
        .del();
    }
  });
};

module.exports = {
  insert,
  getBy,
  update,
  deleteWorkout,
  find
};