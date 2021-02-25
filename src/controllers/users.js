const { User } = require("../../models");

//
// get user
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });
    res.send({
      status: "success",
      data: {
        users,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};

//
// get user by id
exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
      attributes: {
        exclude: ["id", "createdAt", "updatedAt", "password"],
      },
    });

    res.send({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};

//
// edit user
exports.editUser = async (req, res) => {
  try {
    const { gender, phone, address } = req.body;
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });
    await user.update({
      gender,
      phone,
      address,
    });

    const userUpdated = await User.findOne({
      where: {
        id: req.user.id,
      },
      attributes: {
        exclude: ["id", "createdAt", "updatedAt", "password"],
      },
    });
    res.send({
      status: "success",
      data: {
        userUpdated,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};

exports.editPic = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });
    await user.update({
      avatar: req.files.imageFile[0].filename,
    });

    const userUpdated = await User.findOne({
      where: {
        id: req.user.id,
      },
      attributes: {
        exclude: ["id", "createdAt", "updatedAt", "password"],
      },
    });
    res.send({
      status: "success",
      data: {
        userUpdated,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};

//
// delete user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      res.send({
        message: `User with id ${id} Not Existed`,
      });
    }

    await User.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      message: `User with id ${id} deleted`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};
