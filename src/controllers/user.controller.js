import userModel from "../models/user.models.js"
import jwt from "jsonwebtoken"
import dotenv from'dotenv'

export const getUsers = async(req, res)=> {
    try {
        let usuario = req.usuario
        let dataUsers = await userModel.find()
        res.json(dataUsers)
    } catch (error) {
        console.log(error);
        res.send({error:"Información restringida"})
               
    }
}
export const getOneUser = async (req, res)=> {
    try {
        const id = req.params.id
        let user = await userModel.findOne({_id: id})
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(400).send({error: "Usuario no registrado"})
        }
    } catch (error) {
        res.status(404).send({error:"No fue posible atender la solicitud, porfavor confirma la información introducida"})
    }

//     try {
//         let id = req.params.id
//         if (id.length == 24) {
//             let product = await productmodels.findOne({_id: id})
//             if (product) {
//                 res.json(product)
//             } else {
//                 res.send({error: "No se encuentra ningun producto"})
//             }
//         } else {
//             res.send({error: "Id incorrecto"})
//         }
// }
}
export const addUsers = async(req, res)=> {
    try {
        let data = req.body
        let nuevoUsuario = new userModel(data)
        let creado = await nuevoUsuario.save()
        res.status(200).json(creado)
       
    } catch (error) {
        console.log(error);
        res.status(400).send({error:"Necesitas ayuda? contactanos"})
                
    }
}
export const deleteUser = async(req, res)=> {
    try {
        let id = req.params.id
        if (id.length == 24) {
            let user = await userModel.findById(id)
            if (user) {
                let deleteUser = await userModel.findOneAndDelete({_id: id})
                res.json(deleteUser)

            } else {
                res.send({error:"El usuario que intentas eliminar no se encuentra en la base de datos"})
            }

        } else {
            res.send({error:"ID incorrecto"})
        }
       
        
    } catch (error) {
        console.log(error);
        res.send({error:"Error"})
        
    }
}
export const updateUser = async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;

        let user = await userModel.findById(id);

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        Object.assign(user, data);

        let updatedUser = await user.save();

        res.status(200).json(updatedUser);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Ha ocurrido un error al intentar actualizar la información del usuario" });
    }
}
export const inicioDeSesion = async (req, res)=> {
    try {
        let data = req.body
        let user = await userModel.FindOne({email: data.email})

        if (user) {(user.contrasena === data.contrasena); {
            let payload = {
                id: user._id,
                roll: user.roll,
                nombre: `${user.nombre} ${user.apellido}`
            }
            let SECRET_KEY_JWT = process.env.SECRET_KEY_JWT
            let token = jwt.sign(payload, SECRET_KEY_JWT, {expiresIn: '24h'})
            res.status(200).send(token)
        }

        } else {
            res.status(400).send({error:"Credenciales invalidas (correo)"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"Ha ocurrido algo, comunicate con el admin"})
        
    }
}