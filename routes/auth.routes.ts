import { Router } from "express";
import { header } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos";

const { validarVendor, validarToken } = require('../controllers/auth.controller')

const router = Router();


router.post('/validar-token', [
    header('Authorization', 'Debe ingresar un token')
        .notEmpty(),
    validarCampos
], validarToken);

router.post('/validar-vendor', [
    header('Authorization', 'Debe ingresar un token')
        .notEmpty(),
    validarCampos
], validarVendor);


module.exports = router;