const router = require('express').Router();

const User = require('./usersModel.js');

const restricted = require('../../auth/restrictedMiddleware.js');


router.post("/:id/workouts", restricted, (req, res) => {
  let workout = req.body;
  // let date = req.body.date;
  
  User.addWorkout(workout, req.params.id)
  .then(workout => {
      res.status(200).json(workout)
})
      .catch(err => {
        console.log(err)
        res.status(500).json({message: "Failed to create a workout."})
      })
});

router.get('/:id/workouts', restricted, (req, res) => {
  let { workoutName, name } = req.body;

  User.getWorkoutsList(req.params.id)
  .then(workout => {
    
    if(workoutName && name === null) {
      // console.log("this console log", req.body)
        console.log(workout)
        res.status(404).json({message: 'Could not find workouts for given user.'});
      } else {
        res.json(workout)

      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get workouts!"});
    })
})



module.exports = router;