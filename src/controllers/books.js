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
