const express = require("express");                                   //  import EXPRESS web framework / api for routing, middleware etc.
const cors = require("cors");                                         //  import CORS to allows restricted resources on a web page to be 
const helmet = require("helmet");                                     //          requested from another domain outside the domain from which the first resource was served
//                                                                        import HELMET to set up 13 small middleware functions that set HTTP response headers. all 13 are 
const restricted = require("../auth/restrictedMiddleware.js");        //          not included by default
const authRouter = require("../auth/authRouter.js");                  //  <insert Abdi's comments here for authRouter>
// const usersRouter = require("../users/userRouter.js");             //  ---
const workoutRouter = require("../workout/workoutRouter.js");         //  import WORKOUTROUTER for all workouts, exercises, and set routes
//                                                                        
const server = express();                                             //  initialize variable SERVER with express functionality
//                                                                        
server.use(helmet());                                                 //  USE helmet, cors and express.json.
server.use(cors());                                                   //  
server.use(express.json());                                           //  EXPRESS.JSON middleware parses incoming requests with JSON payloads.
//                                                                        
// server.use("/api/auth", authRouter);                               //  <insert Abdi's comments here for authRouter>
// server.use("/api/users", restricted, usersRouter);                 //  <insert Abdi's comments here for authRouter>
server.use("/api/workout", restricted, workoutRouter);                //  
//                                                                       
server.get('/', (req, res) => {                                       //  use express server and perform GET request to the home URL. If server returns data send success msg
  res.status(200).json({ message: "Server up!"})                      //  
})                                                                    //  
//                                                                        
module.exports = server;                                              //  export server to use inside index.js

//                                                                        Server.js is responsible for getting the server up and running
//                                                                        
//                                                                        