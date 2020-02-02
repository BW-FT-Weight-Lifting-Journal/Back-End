const router = require("express").Router();
const Workout = require("../workout/workoutModel.js");

// Get Workout Information
router.get('/', (req, res) => {
  Workout.find()
    .then(workout => {
      res.status(200).json(workout)
    })
    .catch(error => {
      res.status.json({
        message: 'error connecting to the database'
      })
    })
})

router.get("/:id", (req, res) => {
  Workout.getBy({ id: req.params.id })
    .then(user => {
      if (user) {
        res.status(200).json({ ...user });
      } else {
        res.status(404).json({ message: "No Workout with that ID!" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Database error", error: err });
    });
}); 

// Update Workout Information
router.put("/:id", checkID, (req, res) => {

  const changes = req.body;
  const id = req.params;

  Workout.update(id, changes)
    .then(user => {
      res.status(200).json({ message: "Updated user", user });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Database error (Check your body!)", error: err });
    });
});

// Delete Workout and all cooresponding Information
router.delete("/:id", checkID, (req, res) => {

  const id = req.params;

  Workout.deleteWorkout(id)
    .then(user => {
      user
        ? res.status(200).json({ message: "Deleted Workout" })
        : res.status(404).json({ message: "Workout does not exist!" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Database error", error: err });
    });
});

// Check ID middleware
function checkID(req, res, next) {
  Workout.getBy({ id: req.params.id })
    .then(user => {
      if (user) {
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