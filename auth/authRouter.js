const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secret.js");
const User = require("../workout/workoutModel.js");

const register = (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) {
    next();
  } else {
    res.status(400).json({
      message: "Email and Password are required!"
    });
  }
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) {
    next();
  } else {
    res.status(400).json({
      message: "Email and Password are required!"
    });
  }
};

router.post("/register", register, (req, res) => {

  const creds = req.body; 
  const salt = bcrypt.genSaltSync(10); 
  const hash = bcrypt.hashSync(creds.password, salt); 

  User.insert({ ...creds, password: hash })
    .then(() => {User.getByID({ email: creds.email })
      .then(user => {
        const token = generateToken(user);
        res.status(201).json({
          id: user.id,
          token: token,
          name: user.name,
          avatarURL: user.avatarURL
        });
      });
    })
    .catch(err => {
      res.status(500).json({ message: "", error: err });
    });

});

router.post("/login", login, (req, res) => {
  const creds = req.body;
  User.getByID({ email: creds.email })
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        const token = generateToken(user);
        res.status(202).json({
          message: "Correct Credentials!",
          id: user.id,
          token: token,
          name: user.name,
          avatarURL: user.avatarURL
        });
      } else {
        res.status(401).json({ message: "Incorrect Credentials!" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Database error", error: err });
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id, 
    username: user.email
  };
  const options = {
    expiresIn: "1d" 
  };
  return jwt.sign(payload, secrets.jwtSecret, options); 
}

module.exports = router;