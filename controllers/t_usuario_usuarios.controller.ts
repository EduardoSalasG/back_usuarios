import { Request, Response } from 'express';
import { tipo_usuario_usuario } from '../models/tipo_usuario_usuario.model';

//FIXME: Arreglar include: "is not associated"
const t_usuario_usuariosGetByUserId = async (req: Request, res: Response) => {

    const { id } = req.params

    const ts_usuario_usuario: tipo_usuario_usuario[] = await tipo_usuario_usuario.findAll({
        where: {
            USU_ID: id
        },
        attributes: ['TUS_ID']
    })

    res.status(200).json({
        ok: true,
        status: 200,
        body: ts_usuario_usuario
    })
}

const t_usuario_usuariosGeUsers = async (req: Request, res: Response) => {

    const { id } = req.params

    const ts_usuario_usuario: tipo_usuario_usuario[] = await tipo_usuario_usuario.findAll({
        where: {
            TUS_ID: id
        },
        attributes: ['USU_ID']
    })

    res.status(200).json({
        ok: true,
        status: 200,
        body: ts_usuario_usuario
    })
}


const t_usuario_usuariosPost = async (req: Request, res: Response) => {
    const { USU_ID, TUS_ID } = req.body;

    console.log(USU_ID, TUS_ID)

    await tipo_usuario_usuario.create({
        USU_ID: USU_ID,
        TUS_ID: TUS_ID,
        TUU_FECHA_ACTIVACION: new Date()
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Tipo de Usuario asignado a usuario"
    })
}

const t_usuario_usuariosDelete = async (req: Request, res: Response) => {
    const { USU_ID, TUS_ID } = req.body;

    tipo_usuario_usuario.destroy({
        where: {
            TUS_ID: TUS_ID,
            USU_ID: USU_ID
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Asignación de tipo de usuario borrada del usuario"
    })
}




module.exports = {
    t_usuario_usuariosGetByUserId,
    t_usuario_usuariosGeUsers,
    t_usuario_usuariosPost,
    t_usuario_usuariosDelete
} 