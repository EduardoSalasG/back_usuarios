import { Router } from "express";
import { check, param } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos";
import { existePreguntaSeguridad } from "../helpers/db-validators";
const { preguntas_seguridadGet, preguntas_seguridadGetById, preguntas_seguridadPost, preguntas_seguridadPut, preguntas_seguridadDelete } = require('../controllers/preguntas_seguridad.controller')

const router = Router();

router.get('/', preguntas_seguridadGet);

router.get('/:id', [
    param('id').custom(existePreguntaSeguridad),
    validarCampos
], preguntas_seguridadGetById);

router.post('/', [
    check('PSE_ENUNCIADO', 'Debes ingresar el enunciado de la pregunta').notEmpty(),
    validarCampos
], preguntas_seguridadPost);

router.put('/:id', [
    param('id').custom(existePreguntaSeguridad),
    check('PSE_ENUNCIADO', 'Debes ingresar el enunciado de la pregunta').notEmpty(),
    validarCampos
], preguntas_seguridadPut);

router.delete('/:id', [
    param('id').custom(existePreguntaSeguridad),
    validarCampos
], preguntas_seguridadDelete);


module.exports = router;