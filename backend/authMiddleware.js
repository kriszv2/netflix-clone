const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Authentication failed. Token is missing." });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.userId = decoded.id;
    req.isAdmin = decoded.isAdmin;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Authentication failed. Invalid token." });
  }
};

module.exports = authMiddleware;
