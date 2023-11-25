import { Request, Response } from 'express';



const usuariosGet = async (req: Request, res: any) => {
    const respuesta = "Get"
    res.json({ respuesta })
}

const usuariosGetById = async (req: any, res: any) => {
    const { id } = req.params
    const respuesta = "GetByID"
    res.json({ respuesta, id })
}

const usuariosPost = async (req: Request, res: any) => {
    const respuesta = "Post"
    res.json({ respuesta })
}

const usuariosPut = async (req: any, res: any) => {
    const { id } = req.params
    const respuesta = "Put"
    res.json({ respuesta, id })
}

const usuariosDelete = async (req: any, res: any) => {
    const { id } = req.params
    const respuesta = "Delete"
    res.json({ respuesta, id })
}




module.exports = {
    usuariosGet,
    usuariosGetById,
    usuariosPost,
    usuariosPut,
    usuariosDelete
} 