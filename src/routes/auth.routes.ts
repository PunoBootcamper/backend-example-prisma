import { Router } from "express";
import { register, login, logout, profile } from "../controllers/auth.controller";
import { log } from "console";
import { authRequired } from "../middlewares/validateToken";

const router = Router();

router.post("/register", register )
router.post("/login", login )
router.post("/logout", logout )
router.get("/profile", authRequired, profile)

export default router;