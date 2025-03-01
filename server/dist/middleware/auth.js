import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        res.status(401).json({ error: 'Access Denied' });
        return; // ✅ Asegura que la función termina aquí
    }
    jwt.verify(token, process.env.JWT_SECRET || 'secret', (err) => {
        if (err) {
            res.status(403).json({ error: 'Invalid Token' });
            return; // ✅ Asegura que la función termina en este caso
        }
        next(); // 🔥 Asegura que `next()` siempre se llama si el token es válido
    });
};
