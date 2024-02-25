import Diagnostico from "../models/Diagnostico";
import Medico from "../models/Medico";
import Mysql from "../services/connectionDB";

const { Diagnosticos } = Mysql.models;

class DiagnosticosController {
  async listDiagnosticos() {
    return await Diagnosticos.findAll();
  }
  async listDiagnosticobyId(id: Number) {
    return await Diagnosticos.findByPk(id);
  }
  async agregarDiagnostico(diagnostico: Diagnostico) {
    return await Diagnosticos.create(diagnostico);
  }
  async editarDiagnosticos(diagnostico: Diagnostico, id: Number) {
    return await Diagnosticos.update(diagnostico, {
      where: {
        idDiagnostico: id,
      },
    });
  }
  async eliminarDiagnosticos(id: Number) {
    return await Diagnosticos.destroy({
      where: {
        idDiagnostico: id,
      },
    });
  }
}

export default new DiagnosticosController();
