const express = require("express");
const router = express.Router();
const { authenticated } = require("../middlewares/auth");

const { 
    register, login
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

const { 
    getTransactions, editTransaction
} = require("../controllers/transactions");

router.get("/users", getUsers);
router.delete("/user/:id", deleteUser);

router.get("/books", getBooks);
router.get("/book/:id", getBooksById);
router.post("/book", authenticated, addBook);
router.patch("/book/:id", authenticated, editBook);
router.delete("/book/:id", authenticated, deletebook);

// auth
router.post("/register", register);
router.post("/login", login);

// transaction
router.get("/transactions", getTransactions);
router.get("/transaction/:id", editTransaction);


module.exports = router; 