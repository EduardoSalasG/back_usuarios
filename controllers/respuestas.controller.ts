import { Request, Response } from 'express';
import { respuesta } from '../models/respuesta.model';



const respuestasGet = async (req: Request, res: Response) => {
    const respuestas: respuesta[] = await respuesta.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: respuestas
    })
}

const respuestasGetByUserId = async (req: Request, res: Response) => {
    const { id } = req.params

    const respuestas = await respuesta.findByPk(id);
    res.status(200).json({
        ok: true,
        status: 200,
        body: respuestas
    })
}

const respuestasPost = async (req: Request, res: Response) => {
    const { RES_RESPUESTA, USU_ID, PSE_ID } = req.body;
    //TODO: VALIDAR QUE LOS PK NO ESTEN REPETIDOS
    await respuesta.create({ RES_RESPUESTA: RES_RESPUESTA, RES_FECHA: new Date(), USU_ID: USU_ID, PSE_ID: PSE_ID })
    res.status(200).json({
        ok: true,
        status: 200,
        message: "Respuesta creada"
    })
}

module.exports = {
    respuestasGet,
    respuestasGetByUserId,
    respuestasPost,
} 