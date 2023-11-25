import { Router } from "express";


const router = Router();

// TODO: Agregar validaciones como middlewares [] antes del método del controlador
// TODO: express-validator

router.get('/', respuestasGet);
router.get('/:id', respuestasGetById);
router.post('/', respuestasPost);
router.put('/:id', respuestasPut);
router.delete('/:id', respuestasDelete);


module.exports = router;