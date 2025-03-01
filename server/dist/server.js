import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth-routes.js'; // Importar rutas de autenticación

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Usar las rutas de autenticación
app.use('/api', authRoutes);

// Verifica que el servidor se inicia correctamente
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
