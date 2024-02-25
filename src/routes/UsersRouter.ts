import { Request, Response } from "express";
import UsersController from "../controllers/UsersController";
import User from "../models/User";

export const listUsers = async (req: Request, res: Response) => {
  try {
    const user = await UsersController.listUsers();
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export const listUsersbyId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UsersController.listUserbyId(Number(id));
    if (user !== null) {
      res.status(200).json(user);
    } else {
      throw Error("Usuario no encontrado");
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body as User;
    await UsersController.agregarUser(user);
    res
      .status(200)
      .json({ message: "Usuario creado correctamente", data: user });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = req.body as User;
    const { id } = req.params;
    if (Number(id) !== user.Id) {
      throw Error("el id del usuario no coincide");
    }
    await UsersController.editarUser(user, Number(id));
    res
      .status(200)
      .json({ message: "Usuario editado correctamente", data: user });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await UsersController.eliminarUser(Number(id));
    res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
