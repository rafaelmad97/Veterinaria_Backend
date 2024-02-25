import { Request, Response } from "express";
import MedicosController from "../controllers/MedicosController";
import Medico from "../models/Medico";

export const listMedicos = async (req: Request, res: Response) => {
  try {
    const medicos = await MedicosController.listMedicos();
    res.status(200).json(medicos);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export const listMedicosbyId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const medicos = await MedicosController.listMedicosbyId(Number(id));
    if (medicos !== null) {
      res.status(200).json(medicos);
    } else {
      throw Error("Medico no encontrado");
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createMedico = async (req: Request, res: Response) => {
  try {
    const medico = req.body as Medico;
    await MedicosController.agregarMedico(medico);
    res
      .status(200)
      .json({ message: "Medico creado correctamente", data: medico });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateMedico = async (req: Request, res: Response) => {
  try {
    const medico = req.body as Medico;
    const { id } = req.params;
    if (Number(id) !== medico.idMedicos) {
      throw Error("el id del medico no coincide");
    }
    await MedicosController.editarMedicos(medico, Number(id));
    res
      .status(200)
      .json({ message: "Medico editado correctamente", data: medico });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
export const deleteMedico = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await MedicosController.eliminarMedicos(Number(id));
    res.status(200).json({ message: "Medico eliminado correctamente" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
