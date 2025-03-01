import { Router } from 'express';
import { createTicket, getTickets } from '../../controllers/ticket-controller.js';
import { authenticateToken } from '../../middleware/auth.js';
const router = Router();
router.post('/', authenticateToken, createTicket);
router.get('/', authenticateToken, getTickets);
export default router;
