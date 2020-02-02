const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const restricted = require("../auth/restrictedMiddleware.js"); 
const authRouter = require("../auth/authRouter.js");
// const usersRouter = require("../users/userRouter.js");
// const workoutRouter = require("../workout/workoutRouter.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
// server.use("/api/users", restricted, usersRouter); 
// server.use("/api/workout", restricted, workoutRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: "Server up!"})
})

module.exports = server;