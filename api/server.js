const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const restricted = require("../auth/restrictedMiddleware.js"); 
const authRouter = require("../auth/authRouter.js");
<<<<<<< HEAD
// const usersRouter = require("../users/userRouter.js");
// const workoutRouter = require("../workout/workoutRouter.js");
=======
const workoutRouter = require("../routers/workoutRouter.js.js");
>>>>>>> ec4da67cd7ad9b992bbbb71a7239742c7468077d

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
<<<<<<< HEAD
// server.use("/api/users", restricted, usersRouter); 
// server.use("/api/workout", restricted, workoutRouter);
=======
server.use("/api/workout", workoutRouter);
>>>>>>> ec4da67cd7ad9b992bbbb71a7239742c7468077d

server.get('/', (req, res) => {
  res.status(200).json({ message: "Server up!"})
})
module.exports = server;                                             

                                                                      
                                                                       