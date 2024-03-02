import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) =>
  sequelize.define(
    "Pets",
    {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Birthdate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      raza: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { createdAt: false, updatedAt: false, freezeTableName: true }
  );
