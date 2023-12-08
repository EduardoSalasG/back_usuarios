import express from 'express';
import cors from 'cors';
import { testConection } from '../database/config';
class Server {
    app: any;
    port: any;
    usuariosPath: string;
    tipoUsuarioPath: string;
    preguntaSeguridadPath: string;
    respuestasPath: string;
    tipoUsuarioUsuarios: string;
    authPath: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/usuarios';
        this.tipoUsuarioPath = '/tipo_usuarios'
        this.preguntaSeguridadPath = '/preguntas_seguridad'
        this.respuestasPath = '/respuestas'
        this.tipoUsuarioUsuarios = '/tipo_usuario_usuarios'
        this.authPath = '/auth'

        // Conectar a base de datos
        this.conectarDB();

        //Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await testConection()
    }

    middlewares() {

        // CORS 
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

    }


    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios.routes'))
        this.app.use(this.tipoUsuarioPath, require('../routes/t_usuarios.routes'))
        this.app.use(this.preguntaSeguridadPath, require('../routes/preguntas_seguridad.routes'))
        this.app.use(this.respuestasPath, require('../routes/respuestas.routes'))
        this.app.use(this.tipoUsuarioUsuarios, require('../routes/t_usuario_usuarios.routes'))
        this.app.use(this.authPath, require('../routes/auth.routes'))


    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(' Servidor corriendo en el puerto', this.port)
        })

    }


}


module.exports = Server;