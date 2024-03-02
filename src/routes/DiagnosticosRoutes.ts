import { Request, Response } from "express";
import DiagnosticosController from "../controllers/DiagnosticosController";
import Diagnostico from "../models/Diagnostico";

export const listDiagnosticos = async (req: Request, res: Response) => {
  try {
    const diagnosticos = await DiagnosticosController.listDiagnosticos();
    res.status(200).json(diagnosticos);
  } catch (e: any) {
    res.status(500).json({ error: e });
  }
};

export const listDiagnosticobyId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const diagnosticos = await DiagnosticosController.listDiagnosticobyId(
      Number(id)
    );
    if (diagnosticos !== null) {
      res.status(200).json(diagnosticos);
    } else {
      throw Error("Diagnostico no encontrado");
    }
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

export const createDiagnostico = async (req: Request, res: Response) => {
  try {
    const Diagnostico = req.body as Diagnostico;
    await DiagnosticosController.agregarDiagnostico(Diagnostico);
    res
      .status(200)
      .json({ message: "Diagnostico creado correctamente", data: Diagnostico });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

export const updateDiagnostico = async (req: Request, res: Response) => {
  try {
    const diagnostico = req.body as Diagnostico;
    const { id } = req.params;
    if (Number(id) !== diagnostico.Id) {
      throw Error("el id del diagnostico no coincide");
    }
    await DiagnosticosController.editarDiagnosticos(diagnostico, Number(id));
    res.status(200).json({
      message: "Diagnostico editado correctamente",
      data: diagnostico,
    });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};
export const deleteDiagnostico = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await DiagnosticosController.eliminarDiagnosticos(Number(id));
    res.status(200).json({ message: "Diagnostico eliminado correctamente" });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};
