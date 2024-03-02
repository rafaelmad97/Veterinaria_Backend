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
  loginUser,
  updateUser,
} from "./UsersRouter";
import {
  listCitas,
  listCitabyId,
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
import {
  createType,
  deleteTypes,
  listTypes,
  listTypesbyId,
  updateType,
} from "./TypesRoutes";

const router = Router();

router.get("/medicos/list", listMedicos);
router.get("/medicos/list/:id", listMedicosbyId);
router.post("/medicos/create", createMedico);
router.post("/medicos/update/:id", updateMedico);
router.post("/medicos/delete/:id", deleteMedico);
/// Api Medicos
router.get("/citas/list", listCitas);
router.get("/citas/list/:id", listCitabyId);
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
router.get("/users/login", loginUser);
router.post("/users/create", createUser);
router.put("/users/update/:id", updateUser);
router.delete("/users/delete/:id", deleteUser);
// Api Usuarios
router.get("/diagnosticos/list", listDiagnosticos);
router.get("/diagnosticos/list/:id", listDiagnosticobyId);
router.post("/diagnosticos/create", createDiagnostico);
router.put("/diagnosticos/update/:id", updateDiagnostico);
router.delete("/diagnosticos/delete/:id", deleteDiagnostico);
// Api Diagnosticos
router.get("/types/list", listTypes);
router.get("/types/list/:id", listTypesbyId);
router.post("/types/create", createType);
router.post("/types/update/:id", updateType);
router.post("/types/delete/:id", deleteTypes);
// Api Types

export default router;
