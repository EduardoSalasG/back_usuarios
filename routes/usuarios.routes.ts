const { Router } = require('express');
const { usuariosGet, usuariosGetById, usuariosPost, usuariosPut, usuariosDelete  } = require('../controllers/usuarios.controller');

const router = Router();

// TODO: Agregar validaciones como middlewares [] antes del método del controlador
// TODO: express-validator

router.get('/', usuariosGet);
router.get('/:id', usuariosGetById);
router.post('/', usuariosPost);
router.put('/:id', usuariosPut);
router.delete('/:id', usuariosDelete);


module.exports = router;