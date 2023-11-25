import {tipo_usuario } from '../models/tipo_usuario.model'

const existeTipoUsuario = async (id: number) => {
    const existeTipoUsuario = await tipo_usuario.findByPk(id);
    return (existeTipoUsuario == null) ? false : true    
}

export {existeTipoUsuario}