const router = require("express").Router();
const Workout = require("./workoutModel.js");
const restricted = require("../../auth/restrictedMiddleware.js");

<<<<<<< HEAD
router.get("/:id", (req, res) => {
=======


router.get("/:id", restricted, (req, res) => {
>>>>>>> 52d70a92c74f138077978e1043621567535964f6
  Workout.findByID({ id: req.params.id })
    .then(workout => {
      if (workout) {
        res.status(200).json(workout);
      } else {
        res.status(404).json({ message: "No Workout with that ID!" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Database error", error: err });
    });
}); 


<<<<<<< HEAD
router.put("/:id", checkID, (req, res) => {
=======

router.put("/:id", restricted, checkID, (req, res) => {
>>>>>>> 52d70a92c74f138077978e1043621567535964f6

  const changes = req.body;
  const id = req.params;

  Workout.update(id, changes)
    .then(workout => {
      res.status(200).json({ message: "Updated workout", workout });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Database error (Check your body!)", error: err });
    });
});

router.delete("/:id", restricted, checkID, (req, res) => {

  const id = req.params;

  Workout.deleteWorkout(id)
    .then(workout => {
      workout
        ? res.status(200).json({ message: "Deleted Workout" })
        : res.status(404).json({ message: "Workout does not exist!" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Database error", error: err });
    });
});

router.post("/:id/exercises", restricted, (req, res) => {
  let exercises = req.body;
  // let date = req.body.date;
  
  Workout.addExercise(exercises, req.params.id)
  .then(workout => {
      res.status(200).json(workout)
})
      .catch(err => {
        console.log(err)
        res.status(500).json({message: "Failed to create an exercise."})
      })
});

function checkID(req, res, next) {
  Workout.findByID({ id: req.params.id })
    .then(workout => {
      if (workout) {
        next();
      } else {
        res.status(404).json({ message: "No Workout with that ID!" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Database error", error: err });
    });
}

module.exports = router;