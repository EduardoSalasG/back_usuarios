import { pregunta_seguridad } from '../models/pregunta_seguridad.model';
import { tipo_usuario } from '../models/tipo_usuario.model'

const existeTipoUsuario = async (id: number) => {
    const existeTipoUsuario = await tipo_usuario.findByPk(id);
    return (existeTipoUsuario == null) ? false : true
}

const existePreguntaSeguridad = async (id: any) => {
    const existePreguntaSeguridad = await pregunta_seguridad.findOne(id);
    if (!existePreguntaSeguridad) {
        throw new Error(`El id ${id} no existe`)

    }
}

export {
    existeTipoUsuario,
    existePreguntaSeguridad,
}