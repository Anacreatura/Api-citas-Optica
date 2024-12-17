import express from "express";
import { addCitas, createCitas, deleteCitas, getCitas, getOne, modificarCitas } from "../src/controllers/citas.controllers.js";
import { addUsers, deleteUser, getOneUser, getUsers, updateUser } from "../src/controllers/user.controller.js";
import { add, allProducts, deleteProduct, getOneProduct, modify } from "../src/controllers/product.controller.js";
import { login } from "../src/controllers/login.controller.js";

const router = express.Router();

router.post("/crear", createCitas);
router.get("/buscar",getCitas);
router.get("/buscarCita/:id", getOne);
router.post("/crearCita", addCitas);
router.delete("/eliminar/:id", deleteCitas);
router.put("/modificar/:id", modificarCitas);

router.get('/users', getUsers)
router.get('/user/:id', getOneUser)
router.post('/addUsers', addUsers)
router.delete('/deleteUser/:id', deleteUser)
router.put('/updateUser/:id', updateUser)

router.get('/showProduct',allProducts);
router.get('/showOne/:id',getOneProduct);
router.post('/addProduct', add); // verificar middleware para agregar en angular = middlewareJwt.verificacionToken,
router.put('/upDate/:id',modify);
router.delete('/delete/:id',deleteProduct);

router.post('/loginUser', login)

export default router;