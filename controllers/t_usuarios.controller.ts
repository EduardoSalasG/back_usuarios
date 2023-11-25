import { Request, Response } from 'express';
import { tipo_usuario } from '../models/tipo_usuario.model';
// import { tipo_usuario } from '../models/tipo_usuario';



const t_usuariosGet = async (req: Request, res: Response) => {
    try {
        console.log("Dentro del método")
        const t_usuarios: tipo_usuario[] = await tipo_usuario.findAll({
            attributes: ['TUS_NOMBRE', 'TUS_DESCRIPCION']
        })
            console.log(t_usuarios)
            res.status(200).json({
                ok: true,
                status: 200,
                body: t_usuarios
            })
    }catch(error) {
        console.log(error)
        return res.status(500).json({"message": "Hubo un error:", "error": error})
    }
}

const t_usuariosGetById = async (req: any, res: any) => {
    const { id } = req.params
    const respuesta = "GetByID"
    res.json({ respuesta, id })
}

const t_usuariosPost = async (req: Request, res: any) => {
    try {
        const { nombre, descripcion } = req.body;
        await tipo_usuario.create({TUS_NOMBRE: nombre, TUS_DESCRIPCION: descripcion})
            res.status(200).json({
                ok: true,
                status: 200,
                message: "Tipo de Usuario creado"
            })
    }catch(error) {
        console.log(error)
        return res.status(500).json({"message": "Hubo un error:", "error": error})
    }
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