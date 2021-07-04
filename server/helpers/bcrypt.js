const bcrpyt = require("bcryptjs");

// used in hooks
function hashPassword(password) {
  return bcrpyt.hashSync(password, 8);
}

// used in login
function validatePassword(passwordFromBody, passwordFromDb) {
  return bcrpyt.compareSync(passwordFromBody, passwordFromDb);
}

module.exports = {
  hashPassword,
  validatePassword,
};
