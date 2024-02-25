import Type from "../models/Types";
import Mysql from "../services/connectionDB";

const { Types } = Mysql.models;

class TypesController {
  async listTypes() {
    return await Types.findAll();
  }
  async listTypesbyId(id: Number) {
    return await Types.findByPk(id);
  }
  async agregarType(type: Type) {
    return await Types.create(type);
  }
  async editarTypes(type: Type, id: Number) {
    return await Types.update(type, {
      where: {
        idType: id,
      },
    });
  }
  async eliminarTypes(id: Number) {
    return await Types.destroy({
      where: {
        idType: id,
      },
    });
  }
}

export default new TypesController();
