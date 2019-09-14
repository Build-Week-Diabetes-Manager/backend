const express = require("express");
const db = require("./managerModel");
const router = express.Router();
const axios = require("axios");

router.get("/manage", (req, res) => {
  db.get()
    .then(manage => {
      res.status(200).json(manage);
    })
    .catch(err => {
      res.status(500).json({ message: "there was an error" });
    });
});

router.post("/manage", (req, res) => {
  let reqBody = req.body;

  db.add(reqBody)
    .then(info => {
      res.status(201).json(info);
    })
    .catch(err => {
      res.status(500).json(error);
    });
});

router.get("/manage/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const info = await db.getByUserId(id);
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/manage/ds/:id", async (req, res) => {
  const id = req.params.id;
  // console.log('id',id);
  const requestOptions = {
    headers: { "Content-Type": "application/json" }
  };
  // console.log('requestOptions',requestOptions);

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
  //console.log(req.body)
});

router.delete("/manage/:id", (req, res) => {
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

router.put("/manage/:id", (req, res) => {
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
