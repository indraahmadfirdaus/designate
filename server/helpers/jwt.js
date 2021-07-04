const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_KEY

// used in login
function generateToken(body) {
  return jwt.sign(body, JWT_SECRET);
}

// used in authentication
function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = {
  generateToken,
  verifyToken,
};