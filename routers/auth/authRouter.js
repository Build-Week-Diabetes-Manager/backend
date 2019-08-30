//IMPORTS ⬇︎
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../user/userModel");


//REGISTER USER ⬇︎
router.post("/register", (req, res) => {
  if (req.body.username && req.body.password) {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json({ message: "Register Server Error", error });
      });
  } else {
    res
      .status(406)
      .json({ message: "Missing required field ( username, password )." });
  }
});

//LOGIN ⬇︎
router.post("/login", (req, res) => {
  let { username, password } = req.body;
  if (req.body.username && req.body.password) {
    Users.findBy({ username })
      .first()
      .then(user => {
        console.log(user);
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res
            .status(200)
            .json({ message: `Welcome ${user.username} 👋🏼`, token });
        } else {
          res
            .status(401)
            .json({ message: "Invalid credentials, please try again" });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  } else {
    res
      .status(406)
      .json({ message: "Missing required field ( username or password )." });
  }
});

router.get("/users", (req, res) => {
  Users.get()
    .then(manage => {
      res.status(200).json(manage);
    })
    .catch(err => {
      res.status(500).json({ message: "there was an error" });
    });
});

//GENERATING USERS TOKEN ⬇︎
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "5 days"
  };
  return jwt.sign(payload, "Add a .env file", options);
}


//EXPORTS ⬇︎
module.exports = router;
