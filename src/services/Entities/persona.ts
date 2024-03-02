import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) =>
  sequelize.define(
    "Persona",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Nombres: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthdate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      recibeNotificaciones: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    { createdAt: true, updatedAt: false, freezeTableName: true }
  );
