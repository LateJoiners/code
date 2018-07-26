const bcrypt = require("bcrypt-nodejs");

const saltRounds = 10;

const hashPassword = (password, next) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      return next(err, null);
    }

    bcrypt.hash(password, salt, null, (err, hash) => {
      if (err) {
        return next(err, null);
      }

      return next(null, hash);
    });
  });
};

const comparePasswords = (clearPassword, hashedPassword, next) => {
  bcrypt.compare(clearPassword, hashedPassword, (err, isMatch) => {
    if (err) {
      return next(err, null);
    }

    next(null, isMatch);
  });
};

module.exports = {
    hashPassword,
    comparePasswords
}