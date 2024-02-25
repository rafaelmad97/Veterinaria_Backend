import { Request, Response } from "express";
import CitasController from "../controllers/CitasController";
import Cita from "../models/Cita";

export const listCitas = async (req: Request, res: Response) => {
  try {
    const medicos = await CitasController.listCitas();
    res.status(200).json(medicos);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export const listCitabyId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const citas = await CitasController.listCitasbyId(Number(id));
    if (citas !== null) {
      res.status(200).json(citas);
    } else {
      throw Error("Cita no encontrado");
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createCitas = async (req: Request, res: Response) => {
  try {
    const cita = req.body as Cita;
    await CitasController.agregarCita(cita);
    res.status(200).json({ message: "Cita creada correctamente", data: cita });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateCitas = async (req: Request, res: Response) => {
  try {
    const cita = req.body as Cita;
    const { id } = req.params;
    if (Number(id) !== cita.idCitas) {
      throw Error("el id de la cita no coincide");
    }
    await CitasController.editarCitas(cita, Number(id));
    res.status(200).json({ message: "Cita editado correctamente", data: cita });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
export const deleteCitas = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await CitasController.eliminarCitas(Number(id));
    res.status(200).json({ message: "Cita eliminado correctamente" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
