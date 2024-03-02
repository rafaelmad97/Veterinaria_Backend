import { Request, Response } from "express";
import PetsController from "../controllers/PetsController";
import Pet from "../models/Pet";

export const listPets = async (req: Request, res: Response) => {
  try {
    const pets = await PetsController.listPets();
    res.status(200).json(pets);
  } catch (e: any) {
    res.status(500).json({ error: e });
  }
};

export const listPetsbyId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const pets = await PetsController.listPetbyId(Number(id));
    if (pets !== null) {
      res.status(200).json(pets);
    } else {
      throw Error("Mascota no encontrada");
    }
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

export const listPetsbyUserId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const pets = await PetsController.listPetbyUserId(Number(id));
    if (pets !== null) {
      res.status(200).json(pets);
    } else {
      throw Error("Mascota no encontrada");
    }
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

export const createPet = async (req: Request, res: Response) => {
  try {
    const pet = req.body as Pet;
    await PetsController.agregarPet(pet);
    res
      .status(200)
      .json({ message: "Mascota creada correctamente", data: pet });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

export const updatePet = async (req: Request, res: Response) => {
  try {
    const pet = req.body as Pet;
    const { id } = req.params;
    if (Number(id) !== pet.Id) {
      throw Error("el id del medico no coincide");
    }
    await PetsController.editarPet(pet, Number(id));
    res
      .status(200)
      .json({ message: "Mascota editada correctamente", data: pet });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};
export const deletePet = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await PetsController.eliminarPet(Number(id));
    res.status(200).json({ message: "Mascota eliminada correctamente" });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};
