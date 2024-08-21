import express from "express";
import morgan from "morgan";
import tareaRouter from "./routes/tareaRouter";
import autenticacion from "./middlewares/autenticacionMiddleware";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
// app.use(autenticacion);
app.use("/tareas", tareaRouter);

export default app;