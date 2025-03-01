import UserFactory from './user.js';
import TicketFactory from './ticket.js';
import sequelize from '../db/connection.js';

const User = UserFactory(sequelize);
const Ticket = TicketFactory(sequelize);

User.hasMany(Ticket, { foreignKey: 'assignedUserId' });
Ticket.belongsTo(User, { foreignKey: 'assignedUserId' });

export { User, Ticket, sequelize };
