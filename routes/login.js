const express = require('express');
const passport = require('passport');

const router = express.Router();

router
  .route('/login')
  .post(passport.authenticate('local'), (req, res) => {
    res.json(req.user);
  });
router
  .route('/logout')
  .post((req, res) => {
    req.logout();
    res.send('200', 'Successfully Logged Out');
  });

module.exports = router;
