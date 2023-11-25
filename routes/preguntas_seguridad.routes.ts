import { Router } from "express";


const router = Router();

// TODO: Agregar validaciones como middlewares [] antes del método del controlador
// TODO: express-validator

router.get('/', preguntas_seguridadGet);
router.get('/:id', preguntas_seguridadGetById);
router.post('/', preguntas_seguridadPost);
router.put('/:id', preguntas_seguridadPut);
router.delete('/:id', preguntas_seguridadDelete);


module.exports = router;