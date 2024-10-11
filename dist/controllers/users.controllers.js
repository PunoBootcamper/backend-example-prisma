"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
const database_1 = require("../database");
const bcrypt_1 = __importDefault(require("bcrypt"));
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield database_1.prisma.user.findMany();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getUsers = getUsers;
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, apellido, pais, foto_perfil, direccion, numero_contacto, fecha_nacimiento, correo, contrasena, role, idioma_preferido, modo_oscuro, doble_autenticacion, estado, } = req.body;
        const hashedPassword = yield bcrypt_1.default.hash(contrasena, 10);
        //create with prisma
        // Crear el usuario con Prisma
        const newUser = yield database_1.prisma.user.create({
            data: {
                nombre,
                apellido,
                pais,
                foto_perfil,
                direccion,
                numero_contacto,
                fecha_nacimiento: new Date(fecha_nacimiento), // Aseguramos que sea un objeto Date
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
exports.createUser = createUser;
