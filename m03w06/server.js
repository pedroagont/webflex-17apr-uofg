// REQUIREMENTS
const express = require('express');
const morgan = require('morgan');

// SETUP AND MIDDLEWARES
const app = express();
const port = 3000;

// middleware
// app.use((req, res, next) => {
//   console.log(req.url, req.method);
//   next();
// });

app.use(morgan('dev'));

// ROUTES / ENDPOINTS
app.get('/', (req, res) => {
  res.send('Hello U of Guelph!');
});

app.get('/test', (req, res) => {
  res.send('Testing route!');
});

// catch all route
app.use((req, res) => {
  res.send('Not found');
});

// LISTENER
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
