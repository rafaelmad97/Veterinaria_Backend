import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) =>
  sequelize.define(
    "Types",
    {
      idType: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      typeLabel: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { createdAt: false, updatedAt: false }
  );
