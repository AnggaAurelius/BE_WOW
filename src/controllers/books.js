const { Book } = require("../../models");


exports.getBooks = async (req, res) => {
    try{
        const books = await Book.findAll();
        
        res.send({
            status: "success",
            data: {
                books,
            },
        });
    } catch (err){
        console.log(err);
        res.status(500).send({
            message: "Server Error",
        })

    }
};

exports.getBooksById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findOne({
      where: {
        id,
      },
    });

    if (!book) {
      return res.send({
        status: "success",
        message: `Book with id ${id} Not Existed`,
      });
    }

    res.send({
      data: {
        book,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};

exports.addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);

    res.send({
      status: "success",
      data: {
        book,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};

exports.editBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findOne({
      where: {
        id,
      },
    });

    if (!book) {
      return res.send({
        message: `Book with id ${id} Not Existed`,
      });
    }

    await Book.update(req.body, {
      where: {
        id,
      },
    });

    const bookUpdated = await Book.findOne({
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      data: {
        book: bookUpdated,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};