import { Request, Response } from "express";
import { JwtAdapter } from "../helpers/jwt";
import { usuario } from "../models/usuario.model";
import { tipo_usuario_usuario } from "../models/tipo_usuario_usuario.model";

const validarToken = async (req: Request, res: Response) => {
    const authorization = req.header('Authorization');
    if (!authorization) return res.status(401).json({ error: 'No token provided' })
    if (!authorization.startsWith('Bearer ')) return res.status(401).json({ error: 'Invalid Bearer token' })

    const token: any = authorization.split(' ').at(1) || '';

    const payload: any = await JwtAdapter.validateToken(token);

    if (!payload) {
        res.status(200).json({
            ok: false,
            status: 400,
            msg: "Token no válido"
        })
        return
    }

    const user = await usuario.findByPk(payload.id);
    if (!user) {
        res.status(200).json({
            ok: false,
            status: 400,
            msg: "Invalid token - user"
        })
        return
    }

    const estadoUsuario: any = await usuario.findByPk(payload.id, {
        attributes: ['USU_ESTADO']
    })

    if (!estadoUsuario.USU_ESTADO) {
        return res.status(200).json({
            ok: false,
            status: 401,
            msg: "El usuario está deshabilitado"
        })

    }

    const { iat, exp, ...resto } = payload

    res.status(200).json({
        ok: true,
        status: 200,
        user: resto
    })
}

const validarVendor = async (req: Request, res: Response) => {
    const authorization = req.header('Authorization');
    if (!authorization) return res.status(401).json({ error: 'No token provided' })
    if (!authorization.startsWith('Bearer ')) return res.status(401).json({ error: 'Invalid Bearer token' })

    const token: any = authorization.split(' ').at(1) || '';

    const payload: any = await JwtAdapter.validateToken(token);

    if (!payload) {
        res.status(200).json({
            ok: false,
            status: 400,
            msg: "Token no válido"
        })
        return
    }

    const user = await usuario.findByPk(payload.id);
    if (!user) {
        res.status(200).json({
            ok: false,
            status: 400,
            msg: "Invalid token - user"
        })
        return
    }

    const estadoUsuario: any = await usuario.findByPk(payload.id, {
        attributes: ['USU_ESTADO']
    })

    if (!estadoUsuario.USU_ESTADO) {
        return res.status(200).json({
            ok: false,
            status: 401,
            msg: "El usuario está deshabilitado"
        })

    }

    const isVendor: any = await tipo_usuario_usuario.count({ where: { USU_ID: payload.id, TUS_ID: 2 } },)

    if (isVendor == 0) {
        return res.status(200).json({
            ok: false,
            status: 401,
            msg: "El usuario no es vendedor"
        })

    }


    res.status(200).json({
        ok: true,
        status: 200,
    })
}



module.exports = {
    validarToken,
    validarVendor

}

