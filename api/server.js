const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const restricted = require("../auth/restrictedMiddleware.js"); 
const authRouter = require("../auth/authRouter.js");

const workoutRouter = require("../routers/workouts/workoutRouter.js");
const userRouter = require('../Routers/user/usersRouter.js');
// const exercisesRouter = require('../Routers/exercises/exerciseRouter.js');
// const setsRouter = require('../Routers/exercises/setsRouter.js');


const server = express();


server.use(helmet());
server.use(cors());
server.use(express.json());

//Auth and Login Routers
server.use("/api/auth", authRouter);
server.use('/api/users', userRouter );

//Workouts Routers
server.use("/api/workouts", workoutRouter);
// server.use("/api/exercises", exercisesRouter);
// server.use('/api/sets', setsRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: "Server up!"})
})
module.exports = server;                                             

                                                                      
                                                                       