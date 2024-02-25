import { Router } from "express";
import {
  listMedicos,
  listMedicosbyId,
  createMedico,
  updateMedico,
  deleteMedico,
} from "./MedicosRouter";

const router = Router();

router.get("/medicos/list", listMedicos);
router.get("/medicos/list/:id", listMedicosbyId);
router.post("/medicos/create", createMedico);
router.post("/medicos/update/:id", updateMedico);
router.post("/medicos/delete/:id", deleteMedico);

export default router;
