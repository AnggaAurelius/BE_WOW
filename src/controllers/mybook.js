const { User, Book, BookUser, Mybook } = require("../../models");

exports.getList = async (req, res) => {
  try {
    const user = await Mybook.findAll({
      where: {
        user: req.user.id,
      },
      include: {
        as: "book",
        model: Book,
        attributes: {
          exclude: ["about", "createdAt", "updatedAt", "pages", "isbn", "updatedAt", "publicationDate", "epubFile"],
        },
      },
      attributes: {
        exclude: ["description", "createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data: {
        user.book
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
