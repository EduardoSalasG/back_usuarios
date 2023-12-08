import { NextFunction, Request, Response } from "express";
import { JwtAdapter } from "../helpers/jwt";
import { usuario } from "../models/usuario.model";
import { tipo_usuario_usuario } from "../models/tipo_usuario_usuario.model";

export class AuthMiddleware {



    static async validateJWT(req: Request, res: Response, next: NextFunction) {

        const authorization = req.header('Authorization');
        if (!authorization) return res.status(401).json({ error: 'No token provided' })
        if (!authorization.startsWith('Bearer ')) return res.status(401).json({ error: 'Invalid Bearer token' })

        const token: any = authorization.split(' ').at(1) || '';

        try {

            const payload = await JwtAdapter.validateToken(token);
            if (!payload) return res.status(401).json({ error: 'Invalid token' });


            const estadoUsuario: any = await usuario.findByPk(token.USU_ID, {
                attributes: ['USU_ESTADO']
            })

            if (!estadoUsuario.USU_ESTADO) {
                return res.status(200).json({
                    ok: false,
                    status: 401,
                    msg: "El usuario está deshabilitado"
                })

            }

            const user = await usuario.findByPk(token.USU_ID);
            if (!user) {
                res.status(200).json({
                    ok: false,
                    status: 400,
                    msg: "Invalid token - user"
                })
                return
            }

            next()

        } catch (error) {

            console.log(error);
            res.status(500).json({ error: 'Internal server error' });

        }
    }

    static async validateVendor(req: Request, res: Response, next: NextFunction) {

        const authorization = req.header('Authorization');
        if (!authorization) return res.status(401).json({ error: 'No token provided' })
        if (!authorization.startsWith('Bearer ')) return res.status(401).json({ error: 'Invalid Bearer token' })

        const token: any = authorization.split(' ').at(1) || '';

        try {

            const payload: any = await JwtAdapter.validateToken(token);
            if (!payload) return res.status(401).json({ error: 'Invalid token' });


            const isVendor: any = await tipo_usuario_usuario.count({ where: { USU_ID: payload.id, TUS_ID: 2 } },)

            if (isVendor == 0) {
                return res.status(200).json({
                    ok: false,
                    status: 401,
                    msg: "El usuario no es vendedor"
                })

            }

            next()

        } catch (error) {

            console.log(error);
            res.status(500).json({ error: 'Internal server error' });

        }
    }






}