import mongoose from "mongoose";

async function conectarNaDatabase() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.lrz3fxc.mongodb.net/livraria?retryWrites=true&w=majority")

    return mongoose.connection;
}

export default conectarNaDatabase;