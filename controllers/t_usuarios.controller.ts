import { Request, Response } from 'express';



const t_usuariosGet = async (req: Request, res: any) => {
    const respuesta = "Get"
    res.json({ respuesta })
}

const t_usuariosGetById = async (req: any, res: any) => {
    const { id } = req.params
    const respuesta = "GetByID"
    res.json({ respuesta, id })
}

const t_usuariosPost = async (req: Request, res: any) => {
    const respuesta = "Post"
    res.json({ respuesta })
}

const t_usuariosPut = async (req: any, res: any) => {
    const { id } = req.params
    const respuesta = "Put"
    res.json({ respuesta, id })
}

const t_usuariosDelete = async (req: any, res: any) => {
    const { id } = req.params
    const respuesta = "Delete"
    res.json({ respuesta, id })
}




module.exports = {
    t_usuariosGet,
    t_usuariosGetById,
    t_usuariosPost,
    t_usuariosPut,
    t_usuariosDelete
} 