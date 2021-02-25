const { User, Transaction } = require("../../models");

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      include: {
        as: "users",
        model: User,
        attributes: {
          exclude: ["email", "password", "createdAt", "updatedAt", "role"],
        },
      },
      attributes: {
        exclude: ["userId", "createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data: {
        transactions,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};

exports.getTransactionsById = async (req, res) => {
  try {
    const { id } = req.params;

    const transaction = await Transaction.findOne({
      where: {
        id,
      },
      include: {
        as: "users",
        model: User,
        attributes: {
          exclude: ["email", "password", "createdAt", "updatedAt", "role"],
        },
      },
      attributes: {
        exclude: ["userId", "createdAt", "updatedAt"],
      },
    });

    if (!transaction) {
      return res.send({
        status: "success",
        message: `Transaction with id ${id} Not Existed`,
      });
    }

    res.send({
      data: {
        transaction: {
          id: transaction.id,
          user: transaction.users,
          transferProof: transaction.transferProof,
          remainingActive: transaction.remainingActive,
          userStatus: transaction.userStatus,
          paymentStatus: transaction.paymentStatus,
        },
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};

exports.editTransaction = async (req, res) => {
  try {
    // Id transaksi
    const { id } = req.params;

    //mencari transaksi
    const transaction = await Transaction.findOne({
      where: {
        id,
      },
    });

    //validasi
    if (!transaction) {
      return res.send({
        message: `Transaction with id ${id} Not Existed`,
      });
    }

    //ubah data
    await Transaction.update(req.body, {
      where: {
        id,
      },
    });

    //data update
    const transactionUpdated = await Transaction.findOne({
      where: {
        id,
      },
      //filter respon
      include: {
        as: "users",
        model: User,
        attributes: {
          exclude: ["email", "password", "createdAt", "updatedAt", "role"],
        },
      },
      attributes: {
        exclude: ["userId", "createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data: {
        transaction: transactionUpdated,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};
