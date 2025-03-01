import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth-routes.js';
import ticketRoutes from './routes/api/ticket-routes.js';
import { sequelize } from './models/index.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/tickets', ticketRoutes);

sequelize.sync().then(() => {
  app.listen(3001, () => console.log('Server is running on port 3001'));
});

