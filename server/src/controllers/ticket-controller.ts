import { Request, Response } from 'express';
import { Ticket } from '../models/index.js';

export const getTickets = async (_: Request, res: Response) => {
    const tickets = await Ticket.findAll();
    res.json(tickets);
};

export const createTicket = async (req: Request, res: Response) => {
    const ticket = await Ticket.create(req.body);
    res.json(ticket);
};
