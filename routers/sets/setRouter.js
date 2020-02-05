const router = require("express").Router();
const Sets = require("./setModel.js");

const restricted = require("../../auth/restrictedMiddleware.js");



router.get("/:id", (req, res) => {
  Sets.findByID({ id: req.params.id })
    .then(sets => {
      if (sets) {
        res.status(200).json(sets);
      } else {
        res.status(404).json({ message: "No Set with that ID!" });
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "Database error", error: err });
    });
}); 



router.put("/:id", checkID, (req, res) => {

  const changes = req.body;
  const id = req.params;

  Sets.update(id, changes)
    .then(sets => {
      res.status(200).json({ message: "Updated Set!", sets });
    })
    .catch(err => {
      console.log(err)
      res
        .status(500)
        .json({ message: "Database error (Check your body!)", error: err });
    });
});

router.delete("/:id",  checkID, (req, res) => {

  const id = req.params;

  Sets.deleteSet(id)
    .then(sets => {
      sets
        ? res.status(200).json({ message: "Deleted Set" })
        : res.status(404).json({ message: "Set does not exist!" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Database error", error: err });
    });
});

function checkID(req, res, next) {
  Sets.findByID({ id: req.params.id })
    .then(sets => {
      if (sets) {
        next();
      } else {
        res.status(404).json({ message: "No Set with that ID!" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Database error", error: err });
    });
}

module.exports = router;