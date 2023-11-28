import { pregunta_seguridad } from '../models/pregunta_seguridad.model';
import { tipo_usuario } from '../models/tipo_usuario.model'
import { tipo_usuario_usuario } from '../models/tipo_usuario_usuario.model';

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







export {
    existeTipoUsuario,
    existePreguntaSeguridad,
    existeCombinacion
}