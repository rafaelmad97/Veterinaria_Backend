import { Router } from "express";
import {
  listMedicos,
  listMedicosbyId,
  createMedico,
  updateMedico,
  deleteMedico,
} from "./MedicosRouter";
import {
  createPet,
  deletePet,
  listPets,
  listPetsbyId,
  listPetsbyUserId,
  updatePet,
} from "./PetsRoutes";

const router = Router();

router.get("/medicos/list", listMedicos);
router.get("/medicos/list/:id", listMedicosbyId);
router.post("/medicos/create", createMedico);
router.post("/medicos/update/:id", updateMedico);
router.post("/medicos/delete/:id", deleteMedico);

router.get("/pet/list", listPets);
router.get("/pet/list/:id", listPetsbyId);
router.get("/pet/list/byuser/:id", listPetsbyUserId);
router.post("/pet/create", createPet);
router.post("/pet/update/:id", updatePet);
router.post("/pet/delete/:id", deletePet);
/// Api Mascotas

export default router;
