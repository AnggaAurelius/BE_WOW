const express = require("express");
const router = express.Router();
const { authenticated } = require("../middlewares/auth");
const { isAdmin } = require("../middlewares/checkRole");
const { uploadFile } = require("../middlewares/upload");
const { uploadFiles } = require("../middlewares/uploadFile");
const { uploadBook } = require("../middlewares/uploadBook");

const { addTransaction } = require("../controllers/addTransaction");

const { register, login, checkAuth } = require("../controllers/auth");
const { getList, addList } = require("../controllers/bookUsers");

const {
  getUsers,
  deleteUser,
  getUser,
  editUser,
  editPic,
} = require("../controllers/users");

const {
  getBooks,
  getBooksById,
  addBook,
  editBook,
  deletebook,
  addBookWithImage,
} = require("../controllers/books");

const {
  getTransactions,
  editTransaction,
  getTransactionsById,
} = require("../controllers/transactions");

// user
router.get("/users", getUsers);
router.get("/user", authenticated, getUser);
router.patch("/edit-user", authenticated, editUser);
router.patch("/edit-pic", uploadFiles("thumbnail"), authenticated, editPic);
router.delete("/user/:id", deleteUser);

router.get("/books", getBooks);
router.get("/book/:id", getBooksById);
router.post("/book", authenticated, isAdmin, addBook);
router.patch("/book/:id", authenticated, isAdmin, editBook);
router.delete("/book/:id", authenticated, isAdmin, deletebook);
router.post(
  "/upload-book",
  uploadFiles("thumbnail", "epubFile"),
  addBookWithImage
);

// auth
router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", authenticated, checkAuth);

// transaction
router.get("/transactions", getTransactions);
router.get("/transaction/:id", getTransactionsById);
router.patch("/transaction/:id", authenticated, isAdmin, editTransaction);
router.post(
  "/add-transaction",
  uploadFiles("thumbnail"),
  authenticated,
  addTransaction
);

router.get("/mylist", authenticated, getList);
router.post("/addlist/:id", authenticated, addList);

module.exports = router;
