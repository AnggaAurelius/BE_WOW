const { User, Transaction } = require("../../models");

exports.getTransactions = async (req, res) => {
    try{
        const transaction = await Transaction.findAll({
            include: {
                as: "users",
                model: User,
                attributes: {
                    exclude:[ "email","password","createdAt","updatedAt","role"],
                }
            },
            attributes: {
                    exclude:[ "userId","createdAt","updatedAt"],
                },
        });

        res.send({
            status: "success",
            data: {
                transaction,
            },
        });
    } catch (err){
        console.log(err);
        res.status(500).send({
            message: "Server Error",
        })
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
            exclude:[ "email","password","createdAt","updatedAt","role"],
            }
        },
        attributes: {
            exclude:[ "userId","createdAt","updatedAt"],
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
        transaction:{
            id: transaction.id,
            user: transaction.users,
            transferProof: transaction.transferProof,
            remainingActive: transaction.remainingActive,
            userStatus: transaction.userStatus,
            paymentStatus: transaction.paymentStatus,
        }
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
    const { id } = req.params;

    const transaction = await Transaction.findOne({
      where: {
        id,
      },
    });

    if (!transaction) {
      return res.send({
        message: `Transaction with id ${id} Not Existed`,
      });
    }

    await Transaction.update(req.body, {
      where: {
        id,
      },
    });

    const transactionUpdated = await Transaction.findOne({
      where: {
        id,
      },
      include: {
        as: "users",
        model: User,
        attributes: {
            exclude:[ "email","password","createdAt","updatedAt","role"],
            }
        },
        attributes: {
                    exclude:[ "userId","createdAt","updatedAt"],
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