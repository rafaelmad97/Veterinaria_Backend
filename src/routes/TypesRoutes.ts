import { Request, Response } from "express";
import TypesController from "../controllers/TypesController";
import Type from "../models/Types";

export const listTypes = async (req: Request, res: Response) => {
  try {
    const types = await TypesController.listTypes();
    res.status(200).json(types);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export const listTypesbyId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const type = await TypesController.listTypesbyId(Number(id));
    if (type !== null) {
      res.status(200).json(type);
    } else {
      throw Error("Tipo de mascota no encontrado");
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createType = async (req: Request, res: Response) => {
  try {
    const type = req.body as Type;
    await TypesController.agregarType(type);
    res
      .status(200)
      .json({ message: "Tipo de mascota creada correctamente", data: type });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateType = async (req: Request, res: Response) => {
  try {
    const type = req.body as Type;
    const { id } = req.params;
    if (Number(id) !== type.idType) {
      throw Error("el id del tipo de mascota no coincide");
    }
    await TypesController.editarTypes(type, Number(id));
    res
      .status(200)
      .json({ message: "Tipo de mascota editada correctamente", data: type });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
export const deleteTypes = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await TypesController.eliminarTypes(Number(id));
    res
      .status(200)
      .json({ message: "Tipo de mascota editada eliminada correctamente" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
