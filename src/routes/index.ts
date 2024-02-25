import { Router } from "express";
import {
  listMedicos,
  listMedicosbyId,
  createMedico,
  updateMedico,
  deleteMedico,
} from "./MedicosRouter";
import {
  createCitas,
  deleteCitas,
  listCitas,
  updateCitas,
} from "./CitasRoutes";

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

export default router;
