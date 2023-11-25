import { request, response } from 'express';



const respuestasGet = async (req: Request, res: any) => {
    const respuesta = "Get"
    res.json({ respuesta })
}

const respuestasGetById = async (req: any, res: any) => {
    const { id } = req.params
    const respuesta = "GetByID"
    res.json({ respuesta, id })
}

const respuestasPost = async (req: Request, res: any) => {
    const respuesta = "Post"
    res.json({ respuesta })
}

const respuestasPut = async (req: any, res: any) => {
    const { id } = req.params
    const respuesta = "Put"
    res.json({ respuesta, id })
}

const respuestasDelete = async (req: any, res: any) => {
    const { id } = req.params
    const respuesta = "Delete"
    res.json({ respuesta, id })
}




module.exports = {
    respuestasGet,
    respuestasGetById,
    respuestasPost,
    respuestasPut,
    respuestasDelete
} 