const express = require('express');
const router = express.Router();

const { dbNotes } = require('../database');

// List notes
router.get('/', (req, res) => {
  const { user } = req.session;
  if (!user) {
    return res.send('User is not logged in');
  }

  const templateVars = {
    notes: dbNotes,
  };
  res.render('notes/index', templateVars);
});

// New note
router.get('/new', (req, res) => {
  const { user } = req.session;
  if (!user) {
    return res.send('User is not logged in');
  }

  res.render('notes/new');
});

// Show note
router.get('/:id', (req, res) => {
  const { user } = req.session;
  if (!user) {
    return res.send('User is not logged in');
  }

  const templateVars = {
    note: dbNotes[req.params.id],
  };
  res.render('notes/show', templateVars);
});

module.exports = router;
