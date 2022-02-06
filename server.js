const debug = require('debug')('angularjs');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const mongoose = require('mongoose');
const posts = require('./routes/posts');

const app = express();
const appName = '9780992279455_angularjs-novice-to-ninja';
const port = process.env.PORT || 2112;

debug('Booting... %o', appName);
app.use(logger('dev'));

// Mongo...
const dbName = 'spblogger';
const connectionString = `mongodb://localhost:27017/${dbName}`;
mongoose.connect(connectionString);

// Base...
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'app')));

// Routes
app.use('/api', posts);

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
