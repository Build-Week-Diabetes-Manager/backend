const express = require("express");
const db = require("./managerModel");
const router = express.Router();
const axios = require("axios");





// Get all records in manage table
router.get("/", (req, res) => {
  db.get()
    .then(manage => {
      res.status(200).json(manage);
    })
    .catch(err => {
      res.status(500).json({ message: "there was an error" });
    });
});




// Add record to manage table
router.post("/", (req, res) => {
  let reqBody = req.body;
  db.add(reqBody)
    .then(info => {
      res.status(201).json(info);
    })
    .catch(err => {
      res.status(500).json(error);
    });
});



//Get records by user id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const info = await db.getByUserId(id);
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err.message);
  }
});



// Should be by user id ?
router.get("/ds/:id", async (req, res) => {
  const id = req.params.id;
  const requestOptions = {
    headers: { "Content-Type": "application/json" }
  };
  try {
    const userbyid = await db.getByUserId(id);
    const userbyidminusid = userbyid.map(data => delete data.user_id);
    console.log("userbyid", userbyid);
    const data = await axios.post(
      "http://diabetes-manager-app.herokuapp.com/",
      userbyid,
      requestOptions
    );
    console.log("diabetesdata", data);
    res.status(200).json(data.data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
});


// Delete record in manage table by id (not by user id)
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.remove(id)
    .then(users => {
      res.status(200).json({ message: "it was removed" });
    })
    .catch(err => {
      res.status(500).json({
        error: "cannot be removed"
      });
    });
});




// Put record to manage table by id (not by user id)
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const actionbod = req.body;
  console.log(id);
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
