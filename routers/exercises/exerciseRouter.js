const router = require("express").Router();
const Exercise = require("./exerciseModel.js");

const restricted = require("../../auth/restrictedMiddleware.js");


//Get Exercise
router.get("/:id", (req, res) => {
  Exercise.findByID({ id: req.params.id })
    .then(exercise => {
      if (exercise) {
        res.status(200).json(exercise);
      } else {
        res.status(404).json({ message: "No Exercise with that ID!" });
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "Database error", error: err });
    });
}); 


//Update Exercise
router.put("/:id", checkID, (req, res) => {

  const changes = req.body;
  const id = req.params;

  Exercise.update(id, changes)
    .then(exercise => {
      res.status(200).json({ message: "Updated exercise", exercise });
    })
    .catch(err => {
      console.log(err)
      res
        .status(500)
        .json({ message: "Database error (Check your body!)", error: err });
    });
});

//Delet exercise
router.delete("/:id",  checkID, (req, res) => {

  const id = req.params;

  Exercise.deleteExercise(id)
    .then(exercise => {
      exercise
        ? res.status(200).json({ message: "Deleted Exercise" })
        : res.status(404).json({ message: "Exercise does not exist!" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Database error", error: err });
    });
});

// Get Sets
router.get('/:id/sets',  (req, res) => {
  let { exerciseName } = req.body;

  Exercise.getSets(req.params.id)
  .then(exercise => {
    
    if(exerciseName === null) {
        console.log(exercise)
        res.status(404).json({message: 'Could not find sets for given exercise.'});
      } else {
        res.json(exercise)

      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "Failed to get exercises!"});
    })
})

router.post('/:id/sets', (req, res) => {
  Exercise.addSets(req.body)
    .then(sets => {
      res.status(201).json(sets);
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({message: "Failure adding sets"});
    });
});


function checkID(req, res, next) {
  Exercise.findByID({ id: req.params.id })
    .then(exercise => {
      if (exercise) {
        next();
      } else {
        res.status(404).json({ message: "No Exercise with that ID!" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Database error", error: err });
    });
}

module.exports = router;