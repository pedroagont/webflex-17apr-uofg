const express = require('express');
const router = express.Router();

// Register
router.get('/register', (req, res) => {
  res.render('auth/register');
});

// Login
router.get('/login', (req, res) => {
  res.render('auth/login');
});

module.exports = router;
