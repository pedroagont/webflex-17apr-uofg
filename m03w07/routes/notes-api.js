const express = require('express');
const bcrypt = require('bcryptjs');

const { dbNotes } = require('../database');

const router = express.Router();

// CRUD API NOTES
// Create note - POST
router.post('/', (req, res) => {
  const { user } = req.session;
  if (!user) {
    return res.send('User is not logged in');
  }

  console.log(req.body);

  const id = Math.floor(Math.random() * 100);
  const { content } = req.body;

  dbNotes[id] = {
    id,
    content,
  };

  console.log(dbNotes);

  res.redirect(`/notes/${id}`);
});

// Read all notes - GET
router.get('/', (req, res) => {
  res.send(dbNotes);
});

// Read one note - GET
router.get('/:id', (req, res) => {
  res.send(dbNotes[req.params.id]);
});

// Update note - POST/PUT
router.post('/:id/edit', (req, res) => {
  const { user } = req.session;
  if (!user) {
    return res.send('User is not logged in');
  }

  console.log(req.body);

  const { content } = req.body;

  dbNotes[req.params.id].content = content;

  console.log(dbNotes);

  res.redirect(`/notes/${req.params.id}`);
});

// Delete note - POST/DEL
router.post('/:id/delete', (req, res) => {
  const { user } = req.session;
  if (!user) {
    return res.send('User is not logged in');
  }

  delete dbNotes[req.params.id];

  console.log(dbNotes);

  res.redirect('/notes');
});

module.exports = router;
