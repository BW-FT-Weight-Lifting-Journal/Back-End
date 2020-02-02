const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secrets.js");
const Workout = require("../Routers/workoutModel.js.js");
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
  creds.password = hash;
  Workout.insert(creds)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
router.post("/login", login, (req, res) => {
  let { email, password } = req.body;
  Workout.getBy({ email })
    .first()
    .then( user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ token }); 
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
function generateToken(user) {
  const payload = {
     user
  };
  const options = {
    expiresIn: "1d" 
  };
  return jwt.sign(payload, jwtSecret, options); 
}
module.exports = router;