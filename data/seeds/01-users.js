const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // deletes all existing entries
  return knex('users').truncate()
    .then(function () {
      // inserts seed data into local development sqlite3 database
      return knex('users').insert([
      {
        id:1,
        email: "sally1@email.com",
        password: bcrypt.hashSync("user001", bcrypt.genSaltSync(10)),
        name: "Aragron",
        avatarURL: "url"
      },
      {
        id:2,
        email: "sally2@email.com",
        password: bcrypt.hashSync("user002", bcrypt.genSaltSync(10)),
        name: "Gimili",
        avatarURL: "url"
      },
      {
        id:3,
        email: "sally3@email.com",
        password: bcrypt.hashSync("user003", bcrypt.genSaltSync(10)),
        name: "Bilbo",
        avatarURL: "url"
      }]);
    });
};
