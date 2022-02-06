const debug = require('debug')('angularjs');
const express = require('express');
const session = require('express-session');
const logger = require('morgan');
const path = require('path');

const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const posts = require('./routes/posts');
const login = require('./routes/login');

const app = express();
const appName = '9780992279455_angularjs-novice-to-ninja';
const port = process.env.PORT || 2112;

debug('Booting... %o', appName);
app.use(logger('dev'));

// Mongo...
const dbName = 'spblogger';
const connectionString = `mongodb://localhost:27017/${dbName}`;
mongoose.connect(connectionString);

// Passport...
const User = require('./models/users');
require('./routes/passport-config')(LocalStrategy, passport, User);

// Install...
const install = require('./install');

install.generateAdmin();

// Base...
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'app')));

// Session...
app.use(session({
  cookie: { maxAge: 1800000 },
  httpOnly: true,
  resave: true,
  secret: 'ieg3uRee HeeM5thu eeT9ieb7 cheiR7ah',
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api', posts);
app.use(login);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err,
  });
});

// Export
if (require.main === module) {
  app.listen(port, () => {
    console.info(`Express started on port:${port}.`);
  });
} else {
  module.exports = app;
}
