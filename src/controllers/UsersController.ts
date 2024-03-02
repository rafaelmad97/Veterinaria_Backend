import { Op } from "sequelize";
import User from "../models/User";
import Persona from "../models/Persona";
import Mysql from "../services/connectionDB";
import persona from "../services/Entities/persona";

const { Users, Persona } = Mysql.models;

class UsersController {
  async listUsers() {
    return await Users.findAll();
  }
  async listUserbyId(id: Number) {
    const user = await Users.findByPk(id).then((res) => res?.dataValues);

    if (user !== null) {
      const person = await Persona.findByPk(user?.Persona_id).then(
        (res) => res?.dataValues
      );
      return { ...user, ...person };
    }
    throw new Error("el usuario no existe");
  }

  async agregarUser(user: User, persona: Persona) {
    const userExist = await Users.findOne({
      where: {
        username: user.username,
      },
    }).then((res) => res?.dataValues);
    if (userExist !== null) {
      throw new Error("El usuario ya existe en los registros");
    }
    const newpersona = await Persona.create(persona).then(
      (res) => res.dataValues
    );
    console.log(newpersona);
    const newUser = await Users.create({
      ...user,
      Persona_id: newpersona.id,
    }).then((res) => res.dataValues);
    return {
      ...newUser,
      ...newpersona,
      Id: undefined,
    };
  }

  async loginUser(username: string, password: string) {
    const user = await Users.findOne({
      where: {
        [Op.and]: {
          username: username,
          password: password,
        },
      },
    }).then((res) => res?.dataValues);

    if (user !== undefined) {
      const person = await Persona.findByPk(user.Persona_id).then(
        (res) => res?.dataValues
      );
      return { ...user, ...person };
    }
    throw new Error("Usuario no encontrado");
  }

  async editarUser(user: User, persona: Persona, id: Number) {
    try {
      const user_data = await Users.findByPk(id).then((res) => res?.dataValues);
      await Persona.update(
        { ...persona, id: user_data.Persona_id },
        {
          where: {
            id: user_data.Persona_id,
          },
        }
      );
      await Users.update(
        { ...user, createdAt: user_data.createdAt },
        {
          where: {
            Id: id,
          },
        }
      );
      return {
        ...{ ...persona, id: user_data.Persona_id },
        ...{ ...user, createdAt: user_data.createdAt },
        id: undefined,
        Id: undefined,
      };
    } catch (e: any) {
      throw new Error("Usuario no encontrado");
    }
  }

  async eliminarUser(id: Number) {
    return await Users.destroy({
      where: {
        Id: id,
      },
    });
  }
}

export default new UsersController();
