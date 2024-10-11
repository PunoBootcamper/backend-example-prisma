import { Request, Response } from "express";
import { prisma } from "../database";
import { User } from "../types/models";
import { UserRole, UserStatus, PreferredLanguage } from "../types/enums";
import bcrypt from "bcrypt";

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

    res.status(201).json({ message: "Usuario creado", username: newUser.cuenta, email: newUser.correo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const login = async (req: Request, res: Response) => {
  res.send("login");
};
