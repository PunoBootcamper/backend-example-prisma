import { Request, Response } from "express";
import { prisma } from "../database";
import { User } from "../types/models";
import { UserRole, UserStatus, PreferredLanguage } from "../types/enums";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt";

export const register = async (req: Request, res: Response) => {
  try {
    const {
      nombre,
      apellido,
      pais,
      foto_perfil,
      direccion,
      numero_contacto,
      fecha_nacimiento,
      cuenta,
      correo,
      contrasena,
      role,
      idioma_preferido,
      modo_oscuro,
      doble_autenticacion,
      estado,
    } = req.body;

    const passwordHash = await bcrypt.hash(contrasena, 10);

    const newUser = await prisma.user.create({
      data: {
        nombre,
        apellido,
        pais,
        foto_perfil,
        direccion,
        numero_contacto,
        fecha_nacimiento: new Date(fecha_nacimiento), // Aseguramos que sea un objeto Date
        cuenta,
        correo,
        contrasena: passwordHash,
        role,
        idioma_preferido,
        modo_oscuro,
        doble_autenticacion,
        estado,
      },
    });

    const token = await createAccessToken({ id: newUser.id });

    res.cookie("token", token);

    res.status(201).json({
      message: "Usuario creado",
      id: newUser.id,
      username: newUser.cuenta,
      email: newUser.correo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { cuenta, contrasena } = req.body;

  try {
    console.log(cuenta);
    const userFound = await prisma.user.findUnique({
      where: {
        cuenta,
      },
    });

    console.log(userFound);

    if (!userFound) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }

    const isMatch = await bcrypt.compare(contrasena, userFound.contrasena);

    if (!isMatch) {
      res.status(401).json({ error: "Contraseña incorrecta" });
      return;
    }

    const token = await createAccessToken({ id: userFound.id });

    res.cookie("token", token);

    res.status(201).json({
      id: userFound.id,
      username: userFound.cuenta,
      email: userFound.correo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const logout = async (req: Request, res: Response) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.status(200).json({ message: "Sesión cerrada" });
};

export const profile = async (req: Request, res: Response) => {
  
  if (req.user) {
    if (typeof req.user !== 'string' && 'id' in req.user) {
      console.log(req.user.id);
    } else {
      res.status(401).json({ error: "Usuario no autenticado" });
      return;
    }
  } else {
    res.status(401).json({ error: "Usuario no autenticado" });
    return;
  }
  res.json({ message: "Profile" });
}