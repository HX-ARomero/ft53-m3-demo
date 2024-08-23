import express from "express";
import morgan from "morgan";
import indexRouter from "./routes/indexRouter";
// import autenticacion from "./middlewares/autenticacionMiddleware";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
// app.use(autenticacion);
app.use("/", indexRouter);

export default app;