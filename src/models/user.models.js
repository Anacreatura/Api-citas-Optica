import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    roll: {
        type: String,
        required: true
    }
},{
    versionKey: false
}
)

const userModel = mongoose.model('users', UserModel)

export default userModel
/*
{
"nombre":"jose",
"apellidos": "Quinto Aguilar",
"correo": "jose@gmail.com",
"contrasena": "1234jose",
"direccion": "calle 100 # 9 - 90",
"roll": "administrador"
}
*/