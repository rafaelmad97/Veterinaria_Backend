import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  sequelize.define(
    "Medicos",
    {
      idMedicos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Nombre: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Apellidos: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Telefono: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    { createdAt: false, updatedAt: false }
  );
};
