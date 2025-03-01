var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { User } from '../models/index.js';
import bcrypt from 'bcrypt';
const userData = [
    { username: 'admin', password: bcrypt.hashSync('password123', 10) },
    { username: 'user1', password: bcrypt.hashSync('mypassword', 10) }
];
const seedUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    yield User.bulkCreate(userData);
});
export default seedUsers;
