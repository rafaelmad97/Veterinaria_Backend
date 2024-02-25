import Pet from "../models/Pets";
import Mysql from "../services/connectionDB";

const { Pets } = Mysql.models;

class PetController {
  async listPets() {
    return await Pets.findAll();
  }
  async listPetbyId(id: Number) {
    return await Pets.findByPk(id);
  }
  async listPetbyUserId(idUser: Number) {
    return await Pets.findAll({
      where: {
        user_Id: idUser,
      },
    });
  }
  async agregarPet(pet: Pet) {
    return await Pets.create(pet);
  }
  async editarPet(pet: Pet, id: Number) {
    return await Pets.update(pet, {
      where: {
        Id: id,
      },
    });
  }
  async eliminarPet(id: Number) {
    return await Pets.destroy({
      where: {
        Id: id,
      },
    });
  }
}

export default new PetController();
