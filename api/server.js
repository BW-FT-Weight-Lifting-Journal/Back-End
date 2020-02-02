const express = require('express');
const helmet = require('helmet');

//Cors? 


//Routers


//Server

const server = express();

//Server Use

server.use(helmet());
server.use(express.json());

//server.use Routers

//Make sure server is working
server.get('/', (req, res) => {
  res.status(200).json({ message: "Server up!"})
})

module.exports = server;