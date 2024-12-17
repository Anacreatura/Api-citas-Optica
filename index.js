import express, { Router } from "express";
//import routerUsuarios from "./routes/usuarios.routes.js";
import { conectionDB } from "./src/config/DB_Config.js";
//import router from "./routes/citas.routes.js";

import router from "./routes/citas.routes.js";

const app = express();

app.use(express.json());
app.use("/api", router);

conectionDB();

// app.use("/api/products", routerProducts);

//app.use("/api/usuarios", routerUsuarios);


app.listen(3001, () => {
  console.log("App funcionando en el puerto 3001");
});