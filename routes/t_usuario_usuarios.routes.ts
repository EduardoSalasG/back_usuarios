import { Router } from "express";
const { t_usuario_usuariosGet, t_usuario_usuariosGetById, t_usuario_usuariosPost, t_usuario_usuariosPut, t_usuario_usuariosDelete } = require('../controllers/t_usuario_usuarios.controller')

const router = Router();

// TODO: Agregar validaciones como middlewares [] antes del método del controlador
// TODO: express-validator

router.get('/', t_usuario_usuariosGet);
router.get('/:id', t_usuario_usuariosGetById);
router.post('/', t_usuario_usuariosPost);
router.put('/:id', t_usuario_usuariosPut);
router.delete('/:id', t_usuario_usuariosDelete);


module.exports = router;