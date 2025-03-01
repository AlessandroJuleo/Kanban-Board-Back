import { Ticket } from '../models/index.js';

const ticketData = [
  { name: 'Bug en login', status: 'open', description: 'El login falla en algunos casos.' },
  { name: 'Error en UI', status: 'in_progress', description: 'Algunos botones no funcionan correctamente.' }
];

const seedTickets = async () => {
  await Ticket.bulkCreate(ticketData);
};

export default seedTickets;
