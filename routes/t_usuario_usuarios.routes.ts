import { Router } from "express";
import { body, check, param } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos";
import { existeCombinacion, existeTipoUsuario, existeUsuario } from "../helpers/db-validators";
const { t_usuario_usuariosGetByUserId, t_usuario_usuariosGeUsers, t_usuario_usuariosPost, t_usuario_usuariosDelete } = require('../controllers/t_usuario_usuarios.controller')

const router = Router();

// TODO: Agregar validaciones como middlewares [] antes del método del controlador
// TODO: express-validator


router.get('/get-by-user/:id', [
    param('id').notEmpty(),
    validarCampos
], t_usuario_usuariosGetByUserId);

router.get('/get-users/:id', [
    param('id').notEmpty(),
    validarCampos
], t_usuario_usuariosGeUsers);

router.post('/', [
    check('USU_ID', 'Debe ingresar el id del usuario').notEmpty(),
    check('TUS_ID', 'Debe ingresar el id del tipo de usuario').notEmpty(),
    check('USU_ID').custom(existeUsuario),
    check('TUS_ID').custom(existeTipoUsuario),
    check('').custom(existeCombinacion),
    validarCampos
], t_usuario_usuariosPost);

router.delete('/:id', [
    param('id').custom(existeTipoUsuario),
    check('TUS_ESTADO', "Debe ingresar un estado").notEmpty(),
    validarCampos
], t_usuario_usuariosDelete);


module.exports = router;