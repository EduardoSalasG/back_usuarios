import express from 'express';
import cors from 'cors';
// import testConection from '../database/config';
// import sequelize from '../database/config';
const Sequelize = require('sequelize');

class Server {
    app: any;
    port: any;
    usuariosPath: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/usuarios';

        // Conectar a base de datos
        this.conectarDB();

        //Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        try {
            await Sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    middlewares() {

        // CORS 
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

    }


    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios'))


    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(' Servidor corriendo en el puerto', this.port)
        })

    }


}


module.exports = Server;