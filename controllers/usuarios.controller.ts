import { Request, Response } from 'express';
import { usuario } from '../models/usuario.model';
import { check, encrypt } from '../helpers/password-encryption';
import { tipo_usuario_usuario } from '../models/tipo_usuario_usuario.model';
import { JwtAdapter } from '../helpers/jwt';

const usuarioLogin = async (req: Request, res: Response) => {

    const { USU_CORREO, USU_CONTRASENA } = req.body;

    //validar email
    const usuarioResponse: any = await usuario.findOne({ where: { USU_CORREO } });

    if (!usuarioResponse) {
        res.status(200).json({
            ok: false,
            status: 400,
            msg: "Password o EMAIL no válido"
        })
        return
    }

    //validar contraseña
    const contrasenaActual = USU_CONTRASENA.toString();
    const contrasenaDbString = usuarioResponse.USU_CONTRASENA.toString();

    const valido = await check(contrasenaActual, contrasenaDbString);

    if (!valido) {
        res.status(200).json({
            ok: false,
            status: 400,
            msg: "PASSWORD o email no válido"
        })
        return
    }

    //validar estado

    const estadoUsuario: any = await usuario.findByPk(usuarioResponse.USU_ID, {
        attributes: ['USU_ESTADO']
    })

    if (!estadoUsuario.USU_ESTADO) {
        return res.status(200).json({
            ok: false,
            status: 401,
            msg: "El usuario está deshabilitado"
        })

    }

    const tipoUsuario: any = await tipo_usuario_usuario.findAll(
        {
            where: { USU_ID: usuarioResponse.USU_ID },
            attributes: ['TUS_ID']
        });



    const tipos = tipoUsuario.map((tipoUsuario: any) => tipoUsuario.TUS_ID);

    const token = await JwtAdapter.generateToken(
        {
            id: usuarioResponse.USU_ID,
            nombre: usuarioResponse.USU_NOMBRE,
            email: usuarioResponse.USU_CORREO,
            tipoUsuario: tipos
        })
    if (!token) {
        res.status(400).json({
            ok: false,
            status: 400,
            msg: "Error al crear el token"
        })
        return
    }

    res.status(200).json({
        ok: true,
        status: 200,
        token: token
    })

}


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
    const passwordEncriptada = await encrypt(USU_CONTRASENA)
    await usuario.create({
        USU_NOMBRE: USU_NOMBRE,
        USU_APELLIDO_PAT: USU_APELLIDO_PAT,
        USU_APELLIDO_MAT: USU_APELLIDO_MAT,
        USU_RUT: USU_RUT,
        USU_GENERO: USU_GENERO,
        USU_CORREO: USU_CORREO,
        USU_CONTRASENA: passwordEncriptada,
        USU_FECHA_CREACION: new Date(),
        USU_FECHA_ACTUALIZACION_ULTIMA_PASS: new Date(),
        USU_ULTIMA_PASS: passwordEncriptada,
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
    const { USU_CONTRASENA, USU_ULTIMA_PASS } = req.body
    usuario.update({
        USU_ULTIMA_PASS: await encrypt(USU_ULTIMA_PASS),
        USU_CONTRASENA: await encrypt(USU_CONTRASENA),
        USU_FECHA_ACTUALIZACION_ULTIMA_PASS: new Date(),
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

    res.status(200).json({
        ok: true,
        status: 200,
        message: "Usuario deshabilitado"
    })
}




module.exports = {
    usuariosGet,
    usuariosGetById,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuarioLogin
} 