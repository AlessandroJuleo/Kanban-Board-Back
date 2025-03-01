import { Router } from 'express';
import { getAllUsers, createUser, login } from '../../controllers/user-controller.js';
const router = Router();
router.get('/', getAllUsers);
router.post('/', createUser);
router.post('/login', login);
export default router;
