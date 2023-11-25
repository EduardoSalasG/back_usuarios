import { Router } from "express";


const router = Router();

// TODO: Agregar validaciones como middlewares [] antes del método del controlador
// TODO: express-validator

router.get('/', t_usuariosGet);
router.get('/:id', t_usuariosGetById);
router.post('/', t_usuariosPost);
router.put('/:id', t_usuariosPut);
router.delete('/:id', t_usuariosDelete);


module.exports = router;