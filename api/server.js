const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/authRouter.js");
const workoutRouter = require("../routers/workouts/workoutRouter.js");
const userRouter = require('../routers/user/usersRouter.js');
const exercisesRouter = require('../routers/exercises/exerciseRouter.js');
const setsRouter = require("../routers/sets/setRouter.js");

const server = express();


server.use(helmet());
server.use(cors());
server.use(express.json());

//Auth and Login Routers
server.use("/api/auth", authRouter); //Login and Registerations
server.use('/api/users', userRouter ); //We want this to display our workouts.

//Workouts Routers
server.use("/api/workouts", workoutRouter); //We want to add, and edit, and delete a workout.
server.use("/api/exercises", exercisesRouter);
server.use("/api/sets", setsRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: "Server up!"})
})
module.exports = server;                                             

                                                                      
                                                                       