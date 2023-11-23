const { request } = require('express');



const usuariosGet = async (req = request, res) => {
    const respuesta = "Get"
    res.json({respuesta})
}

const usuariosGetById = async (req = request, res) => {
    const { id } = req.params
    const respuesta = "GetByID"
    res.json({respuesta, id})
}

const usuariosPost = async (req = request, res) => {
    const respuesta = "Post"
    res.json({respuesta})
}

const usuariosPut = async (req = request, res) => {
    const { id } = req.params
    const respuesta = "Put"
    res.json({respuesta, id})
}

const usuariosDelete = async (req = request, res) => {
    const { id } = req.params
    const respuesta = "Delete"
    res.json({respuesta, id})
}




module.exports = {
    usuariosGet,
    usuariosGetById,
    usuariosPost,
    usuariosPut,
    usuariosDelete
} 