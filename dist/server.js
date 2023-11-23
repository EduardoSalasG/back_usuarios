"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// const { dbConnection } = require('../database/config')
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.usuariosPath = '/usuarios';
        // Conectar a base de datos
        // this.conectarDB();
        //Middlewares
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();
    }
    // async conectarDB() {
    //     await dbConnection();
    // }
    middlewares() {
        // CORS 
        this.app.use((0, cors_1.default)());
        // Lectura y parseo del body
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(' Servidor corriendo en el puerto', this.port);
        });
    }
}
module.exports = Server;
