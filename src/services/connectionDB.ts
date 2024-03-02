import { Sequelize } from "sequelize";
import Entities from "./Entities";
import dotenv from "dotenv";

const MYSQL_PARSED = dotenv.config().parsed;
const Mysql = new Sequelize({
  dialect: "mysql",
  host: MYSQL_PARSED?.MYSQL_SERVER.toString(),
  port: Number(MYSQL_PARSED?.MYSQL_PORT.toString()),
  database: MYSQL_PARSED?.MYSQL_DATABASE.toString(),
  username: MYSQL_PARSED?.MYSQL_USER.toString(),
  password: MYSQL_PARSED?.MYSQL_PASSWORD.toString(),

  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },

  define: {
    charset: "utf32",
    collate: "utf32_spanish2_ci",
  },
  sync: {
    force: Boolean(MYSQL_PARSED?.TESTING),
    logging: Boolean(MYSQL_PARSED?.TESTING),
  },
});

Entities.getEntities().forEach((item: any) => item.default(Mysql));

const { Persona, Citas, Diagnosticos, Medicos, Pets, Users, Types } =
  Mysql.models;

Persona.hasMany(Users, {
  foreignKey: "Persona_id",
  foreignKeyConstraint: true,
});
// muchos usuarios solo pueden ser una persona
Persona.hasMany(Medicos, {
  foreignKey: "Persona_id",
  foreignKeyConstraint: true,
});

// muchos medicos solo pueden ser una persona

Users.hasMany(Pets, {
  foreignKey: "user_Id",
  foreignKeyConstraint: true,
});
/// los usuarios pueden tener muchas mascotas
Types.hasMany(Pets, {
  foreignKey: "Type_idType",
  foreignKeyConstraint: true,
});
/// hay muchos tipos de mascotas
Pets.hasMany(Citas, {
  foreignKey: "Pet_Id",
  foreignKeyConstraint: true,
});
/// hay mascotas con muchas citas
Citas.hasMany(Diagnosticos, {
  foreignKey: "Citas_idCitas",
  foreignKeyConstraint: true,
});
/// todo diagnostico viene de una cita
Medicos.hasMany(Citas, {
  foreignKey: "Medicos_idMedicos",
  foreignKeyConstraint: true,
});
/// los medicos pueden tener muchas cita

export default Mysql;
