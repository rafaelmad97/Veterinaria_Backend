import Cita from "../models/Citas";
import Mysql from "../services/connectionDB";

const { Citas } = Mysql.models;

class CitasController {
  async listCitas() {
    return await Citas.findAll({ order: [["date", "ASC"]] });
  }
  async listCitasbyId(id: Number) {
    return await Citas.findByPk(id);
  }
  async agregarCita(cita: Cita) {
    return await Citas.create(cita);
  }
  async editarCitas(cita: Cita, id: Number) {
    return await Citas.update(cita, {
      where: {
        idCitas: id,
      },
    });
  }
  async eliminarCitas(id: Number) {
    return await Citas.destroy({
      where: {
        idCitas: id,
      },
    });
  }
}

export default new CitasController();
