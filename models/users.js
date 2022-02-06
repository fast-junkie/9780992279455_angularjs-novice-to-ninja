const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: 'String',
  password: 'String',
  name: 'String',
});

userSchema.methods.validatePassword = function _validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.statics.findByUsername = function _findByUsername(username, callback) {
  this.findOne({ username }).select('-password').exec(callback);
};

module.exports = mongoose.model('user', userSchema);
