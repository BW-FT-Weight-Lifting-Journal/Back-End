const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");
const Workout = require("../workout/workoutModel.js");

// Register Validation Middleware
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

// Login Validation Middleware
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

// Register End Point </api/auth/register> for ADDING a Workout
router.post("/register", register, (req, res) => {

  const creds = req.body; // email, password, and id = creds
  const salt = bcrypt.genSaltSync(10); // salt password
  const hash = bcrypt.hashSync(creds.password, salt); // hash password and add salt

  Workout.insert({ ...creds, password: hash })
    .then(() => {Workout.getBy({ email: creds.email })
      .then(user => {
        const token = generateToken(user);
        res.status(201).json({
          id: user.id,
          token
        });
      });
    })
    .catch(err => {
      res.status(500).json({ message: "", error: err });
    });
});


router.post("/login", login, (req, res) => {
  const creds = req.body;

  Workout.getBy({ email: creds.email })
    .then(user => {
      //Check if passwords are the same
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        const token = generateToken(user);

        newUser = { ...user, isParent: user.isParent === "1" ? true : false };

        res.status(202).json({
          message: "Correct Credentials!",
          user: newUser,
          token
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
