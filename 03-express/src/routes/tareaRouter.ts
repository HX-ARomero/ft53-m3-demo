import { Request, Response, Router } from "express";
import autenticacion from "../middlewares/autenticacionMiddleware";
const tareaRouter = Router();

interface ITarea {
  id?: number;
  actividad: string;
  prioridad: number;
}

//* Simulamos Base de Datos...
const tareas: ITarea[] = [
  {
    id: 1,
    actividad: "Repasar Express",
    prioridad: 9,
  },
  {
    id: 2,
    actividad: "Repasar TypeScript",
    prioridad: 8,
  },
];
let tareaId: number = 10;

tareaRouter.post("/", (req: Request<{}, {}, ITarea>, res: Response): void => {
  // console.log(req);
  const { actividad, prioridad } = req.body;
  if (!actividad || !prioridad) {
    res.status(400).json({ message: "Faltan datos" });
    return;
  }
  const nuevaTarea = {
    id: tareaId++,
    actividad,
    prioridad,
  };
  tareas.push(nuevaTarea);

  res.status(201).json(tareas);
});

tareaRouter.get("/", (req: Request, res: Response): void => {
  res.status(200).json(tareas);
});

tareaRouter.put(
  "/:id",
  (req: Request<{ id: string }, {}, Partial<ITarea>>, res: Response): void => {
    const tareaId = Number(req.params.id);
    const { actividad, prioridad /* completada */ } = req.body;
    // Verificamos que al menos llegue un valor que modificar:
    if (!actividad && !prioridad /* && completada === undefined */) {
      res.status(400).json({ mensaje: "Faltan datos" });
      return;
    }
    // Buscamos la tarea a modificar:
    const tareaEncontrada = tareas.find((tarea) => tarea.id === tareaId);
    // Verificamos que se haya encontrado la tarea:
    if (!tareaEncontrada) {
      res.status(404).json({ mensaje: `No hay tarea con id ${tareaId}` });
      return;
    }
    // Modificarmos los atributos recibidos:
    if (actividad) tareaEncontrada.actividad = actividad;
    if (prioridad !== undefined) tareaEncontrada.prioridad = prioridad;

    // Retornamos tarea modificada:
    res.json(tareaEncontrada);
  }
);

tareaRouter.delete(
  "/:id",
  (req: Request<{ id: string }>, res: Response): void => {
    const tareaId = Number(req.params.id);
    // Buscar el índice de la tarea:
    const indice = tareas.findIndex((tarea) => tarea.id === tareaId);
    // Si no se encuentra la tarea enviamos mensaje:
    if (indice === -1) {
      res.status(404).json({ mensaje: "Tarea no encontrada" });
      return;
    }
    // Si se encontró la tarea, la eliminamos:
    const tareaEliminada = tareas.splice(indice, 1)[0];
    res.json({
      actividad: tareaEliminada.actividad,
      mensaje: "La tarea ha sido eliminada",
    });
  }
);

export default tareaRouter;
