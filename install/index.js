const bcrypt = require('bcryptjs');
const Users = require('../models/users');

module.exports.generateAdmin = function _generateAdmin() {
  Users.findByUsername('admin', (err, user) => {
    if (!user) {
      const users = new Users();
      users.name = 'Admin';
      users.username = 'admin';
      users.password = bcrypt.hashSync('admin');
      users.save();
    }
  });
};
