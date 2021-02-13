const express = require("express");
const router = express.Router();
const { authenticated } = require("../middlewares/auth");
const { isAdmin } = require("../middlewares/checkRole");
const { uploadFile } = require("../middlewares/upload");

const { 
    addTransaction
} = require("../controllers/addTransaction");

const { 
    register, login, checkAuth
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
    getTransactions, editTransaction, getTransactionsById
} = require("../controllers/transactions");

router.get("/users", getUsers);
router.delete("/user/:id", deleteUser);

router.get("/books", getBooks);
router.get("/book/:id", getBooksById);
router.post("/book", authenticated, isAdmin, addBook);
router.patch("/book/:id", authenticated, isAdmin, editBook);
router.delete("/book/:id", authenticated, isAdmin, deletebook);

// auth
router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", authenticated, checkAuth);

// transaction
router.get("/transactions", getTransactions);
router.get("/transaction/:id", getTransactionsById);
router.patch("/transaction/:id", authenticated, isAdmin, editTransaction);
router.post("/addTransaction", uploadFile("imageFile", "videoFile"), authenticated, addTransaction);

module.exports = router; 