const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secrets.js");
<<<<<<< HEAD

const Workout = require("../Routers/workoutModel.js.js");

=======
const Workout = require("../Routers/workoutModel.js.js");
>>>>>>> ec4da67cd7ad9b992bbbb71a7239742c7468077d
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
<<<<<<< HEAD

=======
>>>>>>> ec4da67cd7ad9b992bbbb71a7239742c7468077d
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
<<<<<<< HEAD

// Register End Point </api/auth/register> for ADDING a Workout
router.post("/register", register, (req, res) => {

=======
// Register End Point </api/auth/register> for ADDING a Workout
router.post("/register", register, (req, res) => {
>>>>>>> ec4da67cd7ad9b992bbbb71a7239742c7468077d
  const creds = req.body; // email, password, and id = creds
  const salt = bcrypt.genSaltSync(10); // salt password
  const hash = bcrypt.hashSync(creds.password, salt); // hash password and add salt
  creds.password = hash;
<<<<<<< HEAD

=======
>>>>>>> ec4da67cd7ad9b992bbbb71a7239742c7468077d
  Workout.insert(creds)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
<<<<<<< HEAD


router.post("/login", login, (req, res) => {
  let { email, password } = req.body;

=======
router.post("/login", login, (req, res) => {
  let { email, password } = req.body;
>>>>>>> ec4da67cd7ad9b992bbbb71a7239742c7468077d
  Workout.getBy({ email })
    .first()
    .then( user => {
      if (user && bcrypt.compareSync(password, user.password)) {
<<<<<<< HEAD

        const token = generateToken(user);

=======
        const token = generateToken(user);
>>>>>>> ec4da67cd7ad9b992bbbb71a7239742c7468077d
        res.status(200).json({ token }); 
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
<<<<<<< HEAD

=======
>>>>>>> ec4da67cd7ad9b992bbbb71a7239742c7468077d
function generateToken(user) {
  const payload = {
     user
  };
<<<<<<< HEAD

=======
>>>>>>> ec4da67cd7ad9b992bbbb71a7239742c7468077d
  const options = {
    expiresIn: "1d" 
  };
  return jwt.sign(payload, jwtSecret, options); 
}
<<<<<<< HEAD

module.exports = router;
=======
module.exports = router;
>>>>>>> ec4da67cd7ad9b992bbbb71a7239742c7468077d
