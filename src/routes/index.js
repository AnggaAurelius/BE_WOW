const express = require("express");
const router = express.Router();

const {getUsers, 
    deleteUser
} = require("../controllers/users");

const {getBooks,
    getBooksById
} = require("../controllers/books");

router.get("/users", getUsers);
router.delete("/user/:id", deleteUser);

router.get("/books", getBooks);
router.get("/book/:id", getBooksById);

module.exports = router; 