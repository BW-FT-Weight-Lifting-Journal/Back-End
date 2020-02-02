const knex = require('knex');                             //  import KNEX api so knex.js can be used to build SQL commands in javascript friendly syntax
const knexConfig = require('../knexfile.js');             //  import KNEX.JS configuration file so knex will know where to send DB commands and how according to env
const env = process.env.DB_ENV ||'development';           //  use specific env implementation (all of them are housed in knex.js) according to DB_ENV variable || 'dev env'
//                                                            
module.exports = knex(knexConfig[env]);                   //  export knex implementation so model.js files can access DB and peform SQL commands
