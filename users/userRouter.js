const router = require("express").Router();
const User = require("../users/userModel.js");

// Get user Information
router.get('/', (req, res) => {
  User.find()
    .then(user => {
      res.status(200).json(user)
    })
    .catch(error => {
      res.status.json({
        message: 'error connecting to the database'
      })
    })
})

router.get("/:id", (req, res) => {
  User.getBy({ id: req.params.id })
    .then(user => {
      if (user) {
        let isuserBool;
        if (user.isuser == 1) {
          isuserBool = true;
        } else {
          isuserBool = false;
        }
        res.status(200).json({ ...user, isuser: isuserBool });
      } else {
        res.status(404).json({ message: "No user with that ID!" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Database error", error: err });
    });
}); 

// Update user Information
router.put("/:id", checkID, (req, res) => {

  const changes = req.body;
  const id = req.params;

  User.update(id, changes)
    .then(user => {
      res.status(200).json({ message: "Updated user", user });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Database error (Check your body!)", error: err });
    });
});

// Delete user and all cooresponding Information
router.delete("/:id", checkID, (req, res) => {

  const id = req.params;

  User.deleteUser(id)
    .then(user => {
      user
        ? res.status(200).json({ message: "Deleted user" })
        : res.status(404).json({ message: "user does not exist!" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Database error", error: err });
    });
});

// Check ID middleware
function checkID(req, res, next) {
  User.getBy({ id: req.params.id })
    .then(user => {
      if (user) {
        next();
      } else {
        res.status(404).json({ message: "No user with that ID!" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Database error", error: err });
    });
}

module.exports = router;