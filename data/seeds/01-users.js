const bcrypt = require("bcryptjs");                                           // import bcryptjs api to hash and salt passwords for each user

exports.seed = function(knex) {
  return knex('users').truncate()                                             // deletes all existing entries
    .then(function () {
      return knex('users').insert([                                           // inserts seed data into local development sqlite3 database
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
