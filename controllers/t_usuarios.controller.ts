import { Request, Response } from 'express';
import { tipo_usuario } from '../models/tipo_usuario.model';
import { existeTipoUsuario } from '../helpers/db-validators'

const t_usuariosGet = async (req: Request, res: Response) => {
    try {
        const t_usuarios: tipo_usuario[] = await tipo_usuario.findAll()
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

const t_usuariosGetById = async (req: Request, res: Response) => {
    const { id } = req.params

    try{
        const respuesta = await existeTipoUsuario(parseInt(id))
        if (!respuesta) {
                res.status(400).json({
                ok: true,
                status: 400,
                message: "Usuario no existe"
            }) 
        }     

        const t_usuario: any = await tipo_usuario.findByPk(id);

        res.status(200).json({
            ok: true,
            status: 200,
            body: t_usuario
        })  

    } catch(error) {
        console.log(error)
        return res.status(500).json({"message": "Hubo un error:", "error": error})
    }
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

const t_usuariosPut = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { body } = req;
        tipo_usuario.update(body,{
            where: {
                TUS_ID: id
            }
        })    

        res.status(200).json({
            ok: true,
            status: 200,
            message: "Usuario actualizado"
        })

    }catch(error) {
        console.log(error)
        return res.status(500).json({"message": "Hubo un error:", "error": error})
    }
}

const t_usuariosDelete = async (req: Request, res: Response) => {
    try {
        const { id, estado } = req.params;
        tipo_usuario.update({TUS_ESTADO:estado}, {
            where: {
                TUS_ID: id
            }
        })    

        res.status(200).json({
            ok: true,
            status: 200,
            message: "Usuario actualizado"
        })

    }catch(error) {
        console.log(error)
        return res.status(500).json({"message": "Hubo un error:", "error": error})
    }
}

module.exports = {
    t_usuariosGet,
    t_usuariosGetById,
    t_usuariosPost,
    t_usuariosPut,
    t_usuariosDelete
} 