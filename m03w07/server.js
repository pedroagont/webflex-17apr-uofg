// REQUIREMENTS
const express = require('express');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const helmet = require('helmet');

// SETUP AND MIDDLEWARES
const app = express();
const port = 3000;

// creating custom middleware through req, res and next
// app.use((req, res, next) => {
//   console.log(req.url, req.method);
//   next();
// });

// external middlewares
app.use(morgan('dev')); // to log every request
app.set('view engine', 'ejs'); // to set templates view engine (ejs)
app.use(express.urlencoded({ extended: false })); // to allow parsing a body from request (req.body)
// app.use(cookieParser()); // req.cookies
app.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],

    // Cookie Options
    // maxAge: 24 * 60 * 60 * 1000, // 24 hours
    maxAge: 10 * 60 * 1000, // 10 min
  })
); // req.session
app.use(helmet()); // extra security headers

// ROUTES / ENDPOINTS
const authRoutes = require('./routes/auth');
const authApiRoutes = require('./routes/auth-api');
const notesRoutes = require('./routes/notes');
const notesApiRoutes = require('./routes/notes-api');

app.get('/', (req, res) => {
  res.send('Hello U of Guelph!');
});

// RENDERING ROUTES
app.use('/', authRoutes);
app.use('/notes', notesRoutes);

// API ROUTES
app.use('/api/auth', authApiRoutes);
app.use('/api/notes', notesApiRoutes);

// Catch all route
app.use((req, res) => {
  res.send('Not found');
});

// LISTENER
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
