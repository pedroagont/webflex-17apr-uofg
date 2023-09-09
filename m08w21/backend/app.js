const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

const dbItems = ['buy groceries', 'watch harry potter', 'play xbox'];

app.use(cors());
app.use(express.json()); // req.body

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ROUTES ITEMS CRUD API
// Create - POST
app.post('/api/items', (req, res) => {
  const { content } = req.body;
  dbItems.push(content);

  res.send('Item created!');
});

// Read all - GET
app.get('/api/items', (req, res) => {
  res.send(dbItems);
});

// Read one - GET
app.get('/api/items/:id', (req, res) => {
  res.send(dbItems);
});

// Update

// Delete

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
