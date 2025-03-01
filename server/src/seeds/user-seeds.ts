import { User } from '../models/index.js';
import bcrypt from 'bcrypt';

const userData = [
  { username: 'admin', password: bcrypt.hashSync('password123', 10) },
  { username: 'user1', password: bcrypt.hashSync('mypassword', 10) }
];

const seedUsers = async () => {
  await User.bulkCreate(userData);
};

export default seedUsers;
