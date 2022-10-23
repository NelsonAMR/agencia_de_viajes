import express from "express";
import { paginaInfoViaje, paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes } from "../controllers/paginasControllers.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaInfoViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

export default router;