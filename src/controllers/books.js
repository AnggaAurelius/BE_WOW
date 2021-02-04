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
