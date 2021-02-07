const express = require("express");
const router = express.Router();

const { 
    register
} = require("../controllers/auth");

const {getUsers, 
    deleteUser
} = require("../controllers/users");

const {getBooks,
    getBooksById,
    addBook,
    editBook,
    deletebook
} = require("../controllers/books");

router.get("/users", getUsers);
router.delete("/user/:id", deleteUser);

router.get("/books", getBooks);
router.get("/book/:id", getBooksById);
router.post("/book", addBook);
router.patch("/book/:id", editBook);
router.delete("/book/:id", deletebook);

// auth
router.post("/register", register);

module.exports = router; 