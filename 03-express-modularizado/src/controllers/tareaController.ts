import { Request, Response, Router } from "express";
import ITarea from "../interfaces/Itarea";
import { tareas } from "../utils/tareas";

let tareaId: number = 10;

export const crearTarea = (
  req: Request<{}, {}, ITarea>,
  res: Response
): void => {
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
};

export const obtenerTarea = (req: Request, res: Response): void => {
  res.status(200).json(tareas);
};

export const modificarTarea = (
  req: Request<{ id: string }, {}, Partial<ITarea>>,
  res: Response
): void => {
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
};

export const borrarTarea = (
  req: Request<{ id: string }, {}, Partial<ITarea>>,
  res: Response
): void => {
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
};
