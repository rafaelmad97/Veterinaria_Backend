import Medico from "../models/Medico";
import Mysql from "../services/connectionDB";

const { Medicos } = Mysql.models;

class MedicosController {
  async listMedicos() {
    return await Medicos.findAll();
  }
  async listMedicosbyId(id: Number) {
    return await Medicos.findByPk(id);
  }
  async agregarMedico(Medico: Medico) {
    return await Medicos.create(Medico);
  }
  async editarMedicos(Medico: Medico, id: Number) {
    return await Medicos.update(Medico, {
      where: {
        idMedicos: id,
      },
    });
  }
  async eliminarMedicos(id: Number) {
    return await Medicos.destroy({
      where: {
        idMedicos: id,
      },
    });
  }
}

export default new MedicosController();
