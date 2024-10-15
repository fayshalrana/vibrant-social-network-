const User = require("../Models/user");
const jwt = require("jsonwebtoken");

exports.isAuthenticate = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    // console.log(token);
    // console.log(req.cookies.token);

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please login first",
      });
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRETE);

    req.user = await User.findById(decoded._id);
    next();
    
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
