import { body, check, param } from "express-validator";
import { existeMail, existeUsuario, passwordValido } from "../helpers/db-validators";
import { validarCampos } from "../middlewares/validar-campos";
import { validarRut } from "../helpers/moduloEleven";

const { Router } = require('express');
const { usuariosGet, usuariosGetById, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios.controller');

const router = Router();

// TODO: Agregar validaciones como middlewares [] antes del método del controlador
// TODO: express-validator

router.get('/', usuariosGet);

router.get('/:id', [
    param('id').custom(existeUsuario),
    validarCampos
], usuariosGetById);
// validar el rut y la cantidad de caracteres de la contraseña. 
//Que los nombres y apellidos sean solo texto
//que el genero sea boolean
router.post('/', [
    check('USU_NOMBRE', 'Debe ingresar el nombre').notEmpty(),
    check('USU_APELLIDO_PAT', 'Debe ingresar el apellido paterno').notEmpty(),
    check('USU_APELLIDO_MAT', 'Debe ingresar el apellido materno').notEmpty(),
    check('USU_RUT', 'Debe ingresar el rut').notEmpty(),
    body('').custom(validarRut),
    check('USU_GENERO', 'Debe ingresar un género válido')
        .notEmpty()
        .isBoolean(),
    check('USU_CORREO', 'Debe ingresar un correo válido')
        .notEmpty()
        .isEmail().
        custom(existeMail),
    check('USU_CONTRASENA', 'Debe ingresar la contraseña')
        .notEmpty()
        .isStrongPassword({
            minLength: 8,
            minNumbers: 1,
            minLowercase: 1,
            minUppercase: 1,
            minSymbols: 1
        }),
    validarCampos
], usuariosPost);

router.put('/:id', [
    param('id').custom(existeUsuario),
    body('').custom(passwordValido),
    validarCampos
], usuariosPut);

router.delete('/:id', [
    param('id').custom(existeUsuario),
    validarCampos
], usuariosDelete);

module.exports = router;