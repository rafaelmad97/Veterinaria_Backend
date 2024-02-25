import User from "../models/User";
import Mysql from "../services/connectionDB";

const { Users } = Mysql.models;

class UsersController {
  async listUsers() {
    return await Users.findAll();
  }
  async listUserbyId(id: Number) {
    return await Users.findByPk(id);
  }
  async agregarUser(user: User) {
    return await Users.create(user);
  }
  async editarUser(user: User, id: Number) {
    return await Users.update(user, {
      where: {
        Id: id,
      },
    });
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
