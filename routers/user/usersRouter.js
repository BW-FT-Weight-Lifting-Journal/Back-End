const router = require('express').Router();

const User = require('./usersModel.js');

const restricted = require('../../auth/restrictedMiddleware.js');



router.post("/:id/workouts", (req, res) => {
  let workout = req.body;
    User.addWorkout(workout)
      .then(workout => {
        // if(!workout){

        //   res.status(400).json({message: "You need a workoutName"})
        // } else {
        //   res.status(201).json(workout)
        // }
        res.status(200).json(workout)
      })
      .catch(err => {
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