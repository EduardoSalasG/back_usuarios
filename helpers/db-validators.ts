import { pregunta_seguridad } from '../models/pregunta_seguridad.model';
import { respuesta } from '../models/respuesta.model';
import { tipo_usuario } from '../models/tipo_usuario.model'
import { usuario } from '../models/usuario.model';
import { tipo_usuario_usuario } from '../models/tipo_usuario_usuario.model';
const Sequelize = require('sequelize');

const existeTipoUsuario = async (id: number) => {
    const existeTipoUsuario = await tipo_usuario.findByPk(id);
    if (!existeTipoUsuario) {
        throw new Error('El id no existe')
    }
}

const existePreguntaSeguridad = async (id: any) => {
    const existePreguntaSeguridad = await pregunta_seguridad.findByPk(id);
    if (!existePreguntaSeguridad) {
        throw new Error(`El id no existe`);
    }
}

const existeRespuesta = async (id: any) => {
    const existeRespuesta = await respuesta.findByPk(id);
    if (!existeRespuesta) {
        throw new Error(`El id no existe`);
    }
}
const existeUsuario = async (id: any) => {
    const existeUsuario = await usuario.findByPk(id);
    if (!existeUsuario) {
        throw new Error(`El id no existe`);
    }
}

//FIXME: Revisar, todavía no funciona

const existeCombinacion = async (body: any) => {
    const TUS_ID = body.TUS_ID
    const USU_ID = body.USU_ID

    const consulta = await tipo_usuario_usuario.findAndCountAll({
        where: {
            'USU_ID': USU_ID,
            'TUS_ID': TUS_ID
        }
    }).then(x => {
        return x.count
    })

    console.log("aquí", "TUS_ID", TUS_ID, "USU_ID", USU_ID, consulta)

    if (consulta >= 1) {
        throw new Error('El usuario ya tiene asignado el tipo de usuario')
    }
}

const existeRespuestaUsuario = async (body: any) => {
    const USU_ID = body.USU_ID
    const PSE_ID = body.PSE_ID

    const consulta = await respuesta.findAndCountAll({
        where: {

            'USU_ID': USU_ID,
            'PSE_ID': PSE_ID

        }
    }).then(x => {
        return x.count
    })

    console.log(consulta)

    if (consulta >= 1) {
        throw new Error('Esta pregunta de seguridad ya está asignada al usuario')
    }
}

const existeMail = async (mail: any) => {
    const existeMail = await usuario.findAll({
        where: {
            'USU_CORREO': mail
        }
    })

    console.log(existeMail)
    if (existeMail) {
        throw new Error(`El email ya está en uso`);
    }
}





export {
    existeTipoUsuario,
    existePreguntaSeguridad,
    existeCombinacion,
    existeRespuesta,
    existeUsuario,
    existeRespuestaUsuario,
    existeMail
}