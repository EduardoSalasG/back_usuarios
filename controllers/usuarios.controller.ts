import { Request, Response } from 'express';
import { usuario } from '../models/usuario.model';
import { encrypt } from '../helpers/password-encryption';


const usuariosGet = async (req: Request, res: Response) => {
    const usuarios: usuario[] = await usuario.findAll()
    res.status(200).json({
        ok: true,
        status: 200,
        body: usuarios
    })
}

const usuariosGetById = async (req: Request, res: Response) => {
    const { id } = req.params
    const get_usuarios = await usuario.findByPk(id);
    res.status(200).json({
        ok: true,
        status: 200,
        body: get_usuarios
    })
}

const usuariosPost = async (req: Request, res: Response) => {
    const { USU_NOMBRE,
        USU_APELLIDO_PAT, USU_APELLIDO_MAT,
        USU_RUT, USU_GENERO,
        USU_CORREO, USU_CONTRASENA } = req.body;
    await usuario.create({
        USU_NOMBRE: USU_NOMBRE,
        USU_APELLIDO_PAT: USU_APELLIDO_PAT,
        USU_APELLIDO_MAT: USU_APELLIDO_MAT,
        USU_RUT: USU_RUT,
        USU_GENERO: USU_GENERO,
        USU_CORREO: USU_CORREO,
        USU_CONTRASENA: USU_CONTRASENA,
        USU_FECHA_CREACION: new Date(),
        USU_FECHA_ACTUALIZACION_ULTIMA_PASS: new Date(),
        USU_ULTIMA_PASS: encrypt(USU_CONTRASENA),
        USU_ESTADO: true
    })
    res.status(200).json({
        ok: true,
        status: 200,
        message: "Usuario creado"
    })
}

const usuariosPut = async (req: Request, res: Response) => {
    const { id } = req.params
    const { USU_NOMBRE, USU_APELLIDO_PAT,
        USU_APELLIDO_MAT, USU_RUT,
        USU_GENERO, USU_CORREO,
        USU_FECHA_CREACION, USU_ESTADO,
        createdAt, updatedAt, ...resto } = req.body;

    usuario.update({
        resto,
        USU_FECHA_ACTUALIZACION_ULTIMA_PASS: new Date(),
        USU_ULTIMA_PASS: resto.USU_CONTRASENA
    }, {
        where: {
            USU_ID: id
        }
    })

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Usuario actualizado"
    })
}

const usuariosDelete = async (req: Request, res: Response) => {
    const { id } = req.params
    usuario.update({ USU_ESTADO: false }, {
        where: {
            USU_ID: id
        }
    })
}




module.exports = {
    usuariosGet,
    usuariosGetById,
    usuariosPost,
    usuariosPut,
    usuariosDelete
} 