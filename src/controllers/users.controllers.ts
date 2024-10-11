import { Response, Request, NextFunction } from "express";
import { prisma } from "../database";
import bcrypt from "bcrypt";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

    const hashedPassword = await bcrypt.hash(contrasena, 10);
    //create with prisma
    // Crear el usuario con Prisma
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
        contrasena: hashedPassword,
        role,
        idioma_preferido,
        modo_oscuro,
        doble_autenticacion,
        estado,
      },
    });

    res.status(201).json({ message: "Usuario creado", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
