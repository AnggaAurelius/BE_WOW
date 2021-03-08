const { User, Book, BookUser, Mybook } = require("../../models");

exports.getList = async (req, res) => {
  try {
    const user = await Mybook.findAll({
      where: {
        id: req.user.id,
      },
      include: {
        model: Book,
        attributes: {
          exclude: ["description", "createdAt", "updatedAt"],
        },
        //   // through: {
        //   //   attributes: [],
        //   // },
        // },
        // attributes: {
        //   exclude: ["description", "createdAt", "updatedAt"],
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

exports.addList = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Mybook.findOne({
      where: {
        user: req.user.id,
        bookId: id,
      },
    });

    if (book) {
      res.status(400).send({
        status: "Error",
        message: "You have added this book",
      });
    }

    await Mybook.create({
      user: req.user.id,
      bookId: id,
    });

    res.send({
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};
