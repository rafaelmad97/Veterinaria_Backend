import { Request, Response } from "express";
import UsersController from "../controllers/UsersController";
import User from "../models/User";
import Persona from "../models/Persona";

export const listUsers = async (req: Request, res: Response) => {
  try {
    const user = await UsersController.listUsers();
    res.status(200).json(user);
  } catch (e: any) {
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
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const data = await UsersController.loginUser("xd", "xda");
    res.status(200).json(data);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user: User = {
      Id: 0,
      createdAt: new Date(),
      password: req.body.password,
      username: req.body.username,
    };

    const person: Persona = {
      id: 0,
      Nombres: req.body.Nombres,
      Apellidos: req.body.Apellidos,
      birthdate: req.body.birthdate,
      email: req.body.email,
      recibeNotificaciones: req.body.recibeNotificaciones,
      telefono: req.body.telefono,
    };

    const response = await UsersController.agregarUser(user, person);
    res
      .status(200)
      .json({ message: "Usuario creado correctamente", data: response });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user: User = {
      Id: req.body.Id,
      password: req.body.password,
      username: req.body.username,
      createdAt: new Date(),
    };
    if (Number(id) !== user.Id) {
      throw Error("el id del usuario no coincide");
    }
    const persona: Persona = {
      Apellidos: req.body.Apellidos,
      Nombres: req.body.Nombres,
      birthdate: req.body.birthdate,
      email: req.body.email,
      id: 0,
      recibeNotificaciones: req.body.recibeNotificaciones,
      telefono: req.body.telefono,
    };

    const response = await UsersController.editarUser(
      user,
      persona,
      Number(id)
    );
    res
      .status(200)
      .json({ message: "Usuario editado correctamente", data: response });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await UsersController.eliminarUser(Number(id));
    res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};
