const express = require( 'express' );
const db = require("./managerModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.get("/manage", (req, res) => {
  db.get()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ message: "there was an error" });
    });
});

router.post("/manage", (req, res) => {
  let user = req.body;

  db.add(user)
    .then(info => {
      res.status(201).json({
        ...info
      });
    })
    .catch(err => {
      res.status(500).json(error);
    });
});

router.delete("/manage/:id", (req, res) => {
  let id = req.params.id;

  db.remove(id)
    .then(users => {
      res.status(200).json({message: "it was removed"});
    })
    .catch(err => {
      res.status(500).json({
        error: "cannot be removed"
      });
    });
});

router.put("/manage/:id", (req, res) => {
  const id = req.params.id;
  const actionbod = req.body;
  console.log(id)
  db.update(id, actionbod)
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(error => {
      res.status(500).json({
        error: "The information could not be modified"
      });
    });
});

module.exports = router;
