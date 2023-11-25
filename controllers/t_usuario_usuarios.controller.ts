import { request, response } from 'express';



const t_usuario_usuariosGet = async (req: Request, res: any) => {
    const respuesta = "Get"
    res.json({ respuesta })
}

const t_usuario_usuariosGetById = async (req: any, res: any) => {
    const { id } = req.params
    const respuesta = "GetByID"
    res.json({ respuesta, id })
}

const t_usuario_usuariosPost = async (req: Request, res: any) => {
    const respuesta = "Post"
    res.json({ respuesta })
}

const t_usuario_usuariosPut = async (req: any, res: any) => {
    const { id } = req.params
    const respuesta = "Put"
    res.json({ respuesta, id })
}

const t_usuario_usuariosDelete = async (req: any, res: any) => {
    const { id } = req.params
    const respuesta = "Delete"
    res.json({ respuesta, id })
}




module.exports = {
    t_usuario_usuariosGet,
    t_usuario_usuariosGetById,
    t_usuario_usuariosPost,
    t_usuario_usuariosPut,
    t_usuario_usuariosDelete
} 