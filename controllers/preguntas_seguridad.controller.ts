import { Request, Response } from 'express';
import { pregunta_seguridad } from '../models/pregunta_seguridad.model';
import { existePreguntaSeguridad } from '../helpers/db-validators';


const preguntas_seguridadGet = async (req: Request, res: Response) => {
    try {
        const ps_seguridad: pregunta_seguridad[] = await pregunta_seguridad.findAll()
        res.status(200).json({
            ok: true,
            status: 200,
            body: ps_seguridad
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ "message": "Hubo un error:", "error": error })
    }
}

const preguntas_seguridadGetById = async (req: Request, res: Response) => {
    const { id } = req.params

    try {

        const p_seguridad = await pregunta_seguridad.findByPk(id);

        res.status(200).json({
            ok: true,
            status: 200,
            body: p_seguridad
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ "message": "Hubo un error:", "error": error })
    }
}

const preguntas_seguridadPost = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const p_seguridad = new pregunta_seguridad(body);
        await p_seguridad.save()
        res.json(p_seguridad)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ "message": "Hubo un error:", "error": error })
    }
}

const preguntas_seguridadPut = async (req: Request, res: Response) => {
    const { id } = req.params
    const { body } = req;
    try {
        const p_seguridad = await pregunta_seguridad.findByPk(id)
        //validador de que exista el id
        if (!p_seguridad) {
            return res.status(400).json("No existe el id")
        }
        await p_seguridad.update(body)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ "message": "Hubo un error:", "error": error })
    }
}

const preguntas_seguridadDelete = async (req: Request, res: Response) => {
    const { id, estado } = req.params
    try {
        const p_seguridad = await pregunta_seguridad.findByPk(id)
        //validador de que exista el id
        if (!p_seguridad) {
            return res.status(400).json("No existe el id")
        }
        await p_seguridad.destroy();

    } catch (error) {
        console.log(error)
        return res.status(500).json({ "message": "Hubo un error:", "error": error })
    }
}




module.exports = {
    preguntas_seguridadGet,
    preguntas_seguridadGetById,
    preguntas_seguridadPost,
    preguntas_seguridadPut,
    preguntas_seguridadDelete
} 