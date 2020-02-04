const router = require("express").Router();
const Workout = require("./workoutModel.js");

const restricted = require("../../auth/restrictedMiddleware.js");



router.get("/:id",  (req, res) => {
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



router.put("/:id", checkID, (req, res) => {

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

router.delete("/:id", checkID, (req, res) => {

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

router.post("/:id/exercises", (req, res) => {
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