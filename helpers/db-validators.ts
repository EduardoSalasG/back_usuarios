import { pregunta_seguridad } from '../models/pregunta_seguridad.model';
import { respuesta } from '../models/respuesta.model';
import { tipo_usuario } from '../models/tipo_usuario.model'
import { usuario } from '../models/usuario.model';
import { tipo_usuario_usuario } from '../models/tipo_usuario_usuario.model';
import { check } from './password-encryption';

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

    await tipo_usuario_usuario.findAndCountAll({
        where: {
            'USU_ID': USU_ID,
            'TUS_ID': TUS_ID
        }
    }).then(x => {
        if (x.count >= 1) {
            throw new Error('El usuario ya tiene asignado el tipo de usuario')
        }
    })
}

const noExisteCombinacion = async (body: any) => {
    const TUS_ID = body.TUS_ID
    const USU_ID = body.USU_ID

    await tipo_usuario_usuario.findAndCountAll({
        where: {
            'USU_ID': USU_ID,
            'TUS_ID': TUS_ID
        }
    }).then(x => {
        if (x.count == 0) {
            throw new Error('El usuario no tiene asignado el tipo de usuario')
        }
    })
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

    if (existeMail.length > 0) {
        throw new Error(`El email ya está en uso`);
    }
}

const passwordValido = async (id: number, password: string) => {

    const contrasenaDb: any = await usuario.findByPk(id, {
        attributes: ['USU_CONTRASENA']
    })

    const valido = await check(password, contrasenaDb);

    if (valido) {
        throw new Error(`Contraseña inválida`);
    }
}

export {
    existeTipoUsuario,
    existePreguntaSeguridad,
    existeCombinacion,
    noExisteCombinacion,
    existeRespuesta,
    existeUsuario,
    existeRespuestaUsuario,
    existeMail,
    passwordValido
}