const { User, Transaction } = require("../../models");

exports.addTransaction = async (req, res) => {
  try {
    const newTransaction = await Transaction.create({
      userId: req.user.id,
      transferProof: req.files.thumbnail[0].path,
      remainingactive: 30,
      userStatus: "active",
      paymentStatus: "Pending",
    });

    // const transaction = await Transaction.findOne({
    //   where: {
    //     transferProof: newTransaction.transferProof,
    //   },
    //   include: {
    //     as: "users",
    //     model: User,
    //     attributes: {
    //       exclude: ["email", "password", "createdAt", "updatedAt"],
    //     },
    //   },
    //   attributes: {
    //     exclude: ["userId", "createdAt", "updatedAt"],
    //   },
    // });
    res.send({
      data: {
        newTransaction,
        // : {
        //   id: transaction.id,
        //   user: transaction.users,
        //   transferProof: transaction.transferProof,
        //   remainingActive: transaction.remainingActive,
        //   userStatus: transaction.userStatus,
        //   paymentStatus: transaction.paymentStatus,
        // },
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error..",
    });
  }
};
