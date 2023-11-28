import { Router } from "express";
import { body, check, param } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos";
import { existePreguntaSeguridad, existeRespuesta, existeRespuestaUsuario, existeUsuario } from "../helpers/db-validators";
const { respuestasGet, respuestasGetByUserId, respuestasPost } = require('../controllers/respuestas.controller')


const router = Router();

// TODO: Agregar validaciones como middlewares [] antes del método del controlador
// TODO: express-validator

router.get('/', respuestasGet);

router.get('/:id', [
    param('id').custom(existeRespuesta),
    validarCampos
], respuestasGetByUserId);

router.post('/', [
    check('RES_RESPUESTA', 'Debe ingresar el enunciado de la respuesta').notEmpty(),
    check('PSE_ID', 'Debe ingresar el id de la pregunta de seguridad').notEmpty(),
    check('USU_ID', 'Debe ingresar el id del usuario').notEmpty(),
    check('PSE_ID').custom(existePreguntaSeguridad),
    check('USU_ID').custom(existeUsuario),
    body('').custom(existeRespuestaUsuario),
    validarCampos
], respuestasPost);

module.exports = router;