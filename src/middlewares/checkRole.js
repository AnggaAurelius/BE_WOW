const jwt = require("jsonwebtoken");
const { User } = require("../../models");

//Dummy authenticated middleware
exports.isAdmin = async (req, res, next) => {
  try { 
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });

    if (user.role === "ADMIN") {
      next();
    } else {
      res.status(400).send({
        message: "YOU ARE NOT ADMIN",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "server",
    });
  }
};