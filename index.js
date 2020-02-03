
require('dotenv').config();                                                   //  loads ENV vars from .env file into the process.env object. storing variables in the env
//                                                                                      seperate from code is based on 12 factor app methodology.
const server = require('./api/server.js');                                    //  import server.js to continually listen for changes
//                                                                            //  
const port = process.env.PORT || 4000;                                        //  initialize PORT var with either env var or hard code 4000
//                                                                            //  
server.listen(port, () => console.log(`\n** Running on ${port} **\n`))        //  listen for changes from specific port and send message with success



//                                                                                
//                                                                                Index.js runs server file and initiates environment variable look up.
//                                                                                