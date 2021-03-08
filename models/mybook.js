"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Mybook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mybook.belongsTo(models.Book, {
        as: "book",
        foreignKey: "bookId",
      });
    }
  }
  Mybook.init(
    {
      user: DataTypes.INTEGER,
      bookId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Mybook",
    }
  );
  return Mybook;
};
