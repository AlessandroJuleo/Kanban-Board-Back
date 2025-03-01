import express from 'express';
import { login, createUser } from '../controllers/user-controller.js';

const router = express.Router();

// Ruta para login
router.post('/login', login);

// Nueva ruta para registrar usuarios
router.post('/register', createUser);

export default router;
