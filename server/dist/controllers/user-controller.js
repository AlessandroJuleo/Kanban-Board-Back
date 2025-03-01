import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';

// Obtener todos los usuarios
export const getAllUsers = async (_, res) => {
    try {
        const users = await User.findAll();
        return res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ error: "Error fetching users" });
    }
};

// Crear usuario
export const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hashear contraseña
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ username, password: hashedPassword });

        return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: 'Error creating user' });
    }
};

// Login de usuario
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret', {
            expiresIn: '1h',
        });

        return res.json({ token });
    } catch (error) {
        return res.status(500).json({ error: 'Login failed' });
    }
};
