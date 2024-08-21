import { NextFunction, Request, Response } from "express";

const autenticacion = (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.headers["token"] as string;

  if (!token) {
    res.status(400).json({ message: "Se necesita token" });
    return;
  }

  if (token !== "TokenValido") {
    res.status(400).json({ message: "Token inválido" });
    return;
  }

  next();
};

export default autenticacion;
