import { Router } from "express";
import autenticacion from "../middlewares/autenticacionMiddleware";
import { crearTarea, modificarTarea, obtenerTarea } from "../controllers/tareaController";
const tareaRouter = Router();

tareaRouter.post("/", crearTarea);
tareaRouter.get("/", obtenerTarea);
tareaRouter.put("/:id", modificarTarea)

export default tareaRouter;
