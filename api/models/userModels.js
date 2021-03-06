const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = Schema({
  username: {
    type: Sring,
    required: true,
    unique: true,
    lowercase: true
},
password: {
    type: String,
    required: true,
}
});

UserSchema.pre('save', function(next) {
   bcrypt.hash(this.password, SALT_ROUNDS, (err, hash) => {
    if (err) {
      return next(err);
    }
    this.password = hash;

    next();
  })

});

UserSchema.methods.checkPassword = function(plainTextPW, callBack) {
   bcrypt.compare(plainTextPW, this.password, function(err, isValid) {
    if (err) {
      return callback(err);
    }
    callback(null, isValid);
  });
};

module.exports = mongoose.model('User', UserSchema);
