import { Request, Response } from 'express';
import { pregunta_seguridad } from '../models/pregunta_seguridad.model';


const preguntas_seguridadGet = async (req: Request, res: Response) => {
    const ps_seguridad: pregunta_seguridad[] = await pregunta_seguridad.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: ps_seguridad
    })
}

const preguntas_seguridadGetById = async (req: Request, res: Response) => {
    const { id } = req.params
    const p_seguridad = await pregunta_seguridad.findByPk(id);
    res.status(200).json({
        ok: true,
        status: 200,
        body: p_seguridad
    })
}

const preguntas_seguridadPost = async (req: Request, res: Response) => {
    const { PSE_ENUNCIADO } = req.body;
    await pregunta_seguridad.create({ PSE_ENUNCIADO: PSE_ENUNCIADO })
    res.status(200).json({
        ok: true,
        status: 200,
        message: "Pregunta de seguridad creada"
    })
}

const preguntas_seguridadPut = async (req: Request, res: Response) => {
    const { id } = req.params
    const { PSE_ID, createdAt, updatedAt, ...resto } = req.body;

    pregunta_seguridad.update(resto, {
        where: {
            PSE_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Pregunta de seguridad actualizada"
    })

}

const preguntas_seguridadDelete = async (req: Request, res: Response) => {
    const { id } = req.params

    pregunta_seguridad.destroy({
        where: {
            PSE_ID: id
        }
    });

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Pregunta de seguridad eliminada"
    })
}

module.exports = {
    preguntas_seguridadGet,
    preguntas_seguridadGetById,
    preguntas_seguridadPost,
    preguntas_seguridadPut,
    preguntas_seguridadDelete
} 