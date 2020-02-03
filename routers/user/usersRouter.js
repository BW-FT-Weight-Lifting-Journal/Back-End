const router = require('express').Router();
const User = require('./usersModel.js');
const restricted = require('../../auth/restrictedMiddleware.js');

router.get('/:id/workouts', restricted, (req, res) => {
  let { workoutName, name } = req.body;
  User.getWorkoutsList(req.params.id)
  .then(workout => {
    if(workoutName && name === null) {
        res.status(404).json({message: 'Could not find workouts for given user.'});
      } else {
        res.json(workout)
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get workouts!"});
    })
})

// add a workout to a users profile
router.post("/:id/workouts", (req, res) => {
  // receive workoutName and date from FE
  let { workoutName, date } = req.body;
  // receive userID from FE
  let userID = req.params.id;
  // add workout to USER-WORKOUTS and WORKOUTS tables
  User.addWorkout(workoutName, date, userID)
    .then(workout => {
      res.status(200).json(workout)
    })
    .catch(err => {
      res.status(500).json({message: "failed to add workout to user-workouts/workouts tables"})
    })
})

module.exports = router;