import { Router } from "express";
import { check, param } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos";
import { existeRespuesta } from "../helpers/db-validators";
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
    check('RES_RESPUESTA', 'Debes ingresar el enunciado de la respuesta').notEmpty(),
    validarCampos
], respuestasPost);

module.exports = router;