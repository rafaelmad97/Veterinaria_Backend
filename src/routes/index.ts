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

const router = Router();

router.get("/medicos/list", listMedicos);
router.get("/medicos/list/:id", listMedicosbyId);
router.post("/medicos/create", createMedico);
router.post("/medicos/update/:id", updateMedico);
router.post("/medicos/delete/:id", deleteMedico);

router.get("/users/list", listUsers);
router.get("/users/list/:id", listUsersbyId);
router.post("/users/create", createUser);
router.post("/users/update/:id", updateUser);
router.post("/users/delete/:id", deleteUser);
// Api Usuarios

export default router;
