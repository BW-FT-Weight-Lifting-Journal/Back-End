const bcrypt = require("bcryptjs");                                           

exports.seed = function(knex) {
  return knex('users')                                          
    .then(function () {
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
        email: "Willy@gmail.com",
        password: bcrypt.hashSync("user002", bcrypt.genSaltSync(10)),
        name: "Gimili",
        avatarURL: "url"
      },
      {
        id:3,
        email: "Billy@gmail.com",
        password: bcrypt.hashSync("user003", bcrypt.genSaltSync(10)),
        name: "Bilbo",
        avatarURL: "url"
      }]);
    });
};
