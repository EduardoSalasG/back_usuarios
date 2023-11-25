import { request, response } from 'express';



const preguntas_seguridadGet = async (req: Request, res: any) => {
    const respuesta = "Get"
    res.json({ respuesta })
}

const preguntas_seguridadGetById = async (req: any, res: any) => {
    const { id } = req.params
    const respuesta = "GetByID"
    res.json({ respuesta, id })
}

const preguntas_seguridadPost = async (req: Request, res: any) => {
    const respuesta = "Post"
    res.json({ respuesta })
}

const preguntas_seguridadPut = async (req: any, res: any) => {
    const { id } = req.params
    const respuesta = "Put"
    res.json({ respuesta, id })
}

const preguntas_seguridadDelete = async (req: any, res: any) => {
    const { id } = req.params
    const respuesta = "Delete"
    res.json({ respuesta, id })
}




module.exports = {
    preguntas_seguridadGet,
    preguntas_seguridadGetById,
    preguntas_seguridadPost,
    preguntas_seguridadPut,
    preguntas_seguridadDelete
} 