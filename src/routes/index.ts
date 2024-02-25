import { Router } from "express";
import {
  listMedicos,
  listMedicosbyId,
  createMedico,
  updateMedico,
  deleteMedico,
} from "./MedicosRouter";
import {
  createUser,
  deleteUser,
  listUsers,
  listUsersbyId,
  updateUser,
} from "./UsersRouter";

import {
  listCitas,
  listMedicosbyId,
  createCitas,
  updateCitas,
  deleteCitas,
} from "./CitasRoutes";

import {
  createPet,
  deletePet,
  listPets,
  listPetsbyId,
  listPetsbyUserId,
  updatePet,
} from "./PetsRoutes";
import {
  createDiagnostico,
  deleteDiagnostico,
  listDiagnosticobyId,
  listDiagnosticos,
  updateDiagnostico,
} from "./DiagnosticosRoutes";

const router = Router();

router.get("/medicos/list", listMedicos);
router.get("/medicos/list/:id", listMedicosbyId);
router.post("/medicos/create", createMedico);
router.post("/medicos/update/:id", updateMedico);
router.post("/medicos/delete/:id", deleteMedico);
/// Api Medicos
router.get("/citas/list", listCitas);
router.get("/citas/list/:id", listMedicosbyId);
router.post("/citas/create", createCitas);
router.post("/citas/update/:id", updateCitas);
router.post("/citas/delete/:id", deleteCitas);
/// api Citas
router.get("/pet/list", listPets);
router.get("/pet/list/:id", listPetsbyId);
router.get("/pet/list/byuser/:id", listPetsbyUserId);
router.post("/pet/create", createPet);
router.post("/pet/update/:id", updatePet);
router.post("/pet/delete/:id", deletePet);
/// Api Mascotas

router.get("/users/list", listUsers);
router.get("/users/list/:id", listUsersbyId);
router.post("/users/create", createUser);
router.post("/users/update/:id", updateUser);
router.post("/users/delete/:id", deleteUser);
// Api Usuarios
router.get("/diagnosticos/list", listDiagnosticos);
router.get("/diagnosticos/list/:id", listDiagnosticobyId);
router.post("/diagnosticos/create", createDiagnostico);
router.post("/diagnosticos/update/:id", updateDiagnostico);
router.post("/diagnosticos/delete/:id", deleteDiagnostico);
// Api Diagnosticos

export default router;
