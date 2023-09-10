import mongoose from "mongoose";


async function conectarNaDatabase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
}

export default conectarNaDatabase;