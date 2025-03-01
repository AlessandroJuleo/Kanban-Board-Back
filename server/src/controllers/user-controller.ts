import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';

export const getAllUsers = async (_: Request, res: Response) => {
  const users = await User.findAll();
  return res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Error creating user' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.getDataValue('password')))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.getDataValue('id') }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '1h',
    });

    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ error: 'Login failed' });
  }
};
