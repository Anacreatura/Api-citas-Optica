import mongoose from "mongoose";

export const conectionDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/ANA"
    );
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.error(error);
    throw new Error("Error al iniciar la base de datos");
  }
};