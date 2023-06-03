const express = require('express');
const bcrypt = require('bcryptjs');

const { dbUsers } = require('../database');

const router = express.Router();

// API Register
router.post('/register', (req, res) => {
  console.log(req.body);

  const id = Math.floor(Math.random() * 100);
  const { email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 8);

  dbUsers[id] = {
    id,
    email,
    password: hashedPassword,
  };

  console.log(dbUsers);

  res.redirect('/login');
});

// API Login
router.post('/login', (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  let user;
  for (let uId in dbUsers) {
    if (dbUsers[uId].email === email) {
      user = dbUsers[uId];
    }
  }

  // const passwordsMatch = user.password === password;
  const passwordsMatch = bcrypt.compareSync(password, user.password);
  if (!passwordsMatch) {
    return res.send('Invalid credentials');
  }

  // res.cookie('user', user.email);
  req.session.user = user.email;

  res.redirect('/notes');
});

// API Logout
router.post('/logout', (req, res) => {
  // res.clearCookie('user'); req.cookies
  req.session = null;
  res.redirect('/login');
});

module.exports = router;
