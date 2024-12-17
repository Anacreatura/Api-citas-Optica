import express from "express";
import { addCitas, createCitas, deleteCitas, getCitas, getOne, modificarCitas } from "../src/controllers/citas.controllers.js";

const router = express.Router();

router.post("/crear", createCitas);
router.get("/buscar/:id",getCitas);
router.get("/buscarCita/:id", getOne);
router.post("/crearCita", addCitas);
router.delete("/eliminar/:id", deleteCitas);
router.put("/modificar/:id", modificarCitas);

//const { createCita, deleteCita, getCita, getCitas } = citasControllers;
//import { createCita, deleteCita, getCita, getCitas } from "../src/controllers/citas.controllers.js";






export default router;