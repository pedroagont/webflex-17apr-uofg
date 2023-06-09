// REQUIREMENTS
const express = require('express');
const morgan = require('morgan');

const dbNotes = {
  1: {
    id: 1,
    content: 'Watch toy story',
  },
  2: {
    id: 2,
    content: 'Read harry potter',
  },
  3: {
    id: 3,
    content: 'Learn javascript',
  },
};

// SETUP AND MIDDLEWARES
const app = express();
const port = 3000;

// creating custo middleware through req, res and next
// app.use((req, res, next) => {
//   console.log(req.url, req.method);
//   next();
// });

// external middlewares
app.use(morgan('dev')); // to log every request
app.set('view engine', 'ejs'); // to set templates view engine (ejs)
app.use(express.urlencoded({ extended: false })); // to allow parsing a body from request (req.body)

// ROUTES / ENDPOINTS
app.get('/', (req, res) => {
  res.send('Hello U of Guelph!');
});

app.get('/test', (req, res) => {
  res.send('test');
});

// RENDERING ROUTES
// List notes
app.get('/notes', (req, res) => {
  const templateVars = {
    notes: dbNotes,
  };
  res.render('notes-index', templateVars);
});

// New note
app.get('/notes/new', (req, res) => {
  res.render('notes-new');
});

// Show note
app.get('/notes/:id', (req, res) => {
  const templateVars = {
    note: dbNotes[req.params.id],
  };
  res.render('notes-show', templateVars);
});

// CRUD API NOTES
// Create note - POST
app.post('/api/notes', (req, res) => {
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
app.get('/api/notes', (req, res) => {
  res.send(dbNotes);
});

// Read one note - GET
app.get('/api/notes/:id', (req, res) => {
  res.send(dbNotes[req.params.id]);
});

// Update note - POST/PUT
app.post('/api/notes/:id/edit', (req, res) => {
  console.log(req.body);

  const { content } = req.body;

  dbNotes[req.params.id].content = content;

  console.log(dbNotes);

  res.redirect(`/notes/${req.params.id}`);
});

// Delete note - POST/DEL
app.post('/api/notes/:id/delete', (req, res) => {
  delete dbNotes[req.params.id];

  console.log(dbNotes);

  res.redirect('/notes');
});

// Catch all route
app.use((req, res) => {
  res.send('Not found');
});

// LISTENER
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
