import { DataTypes, Model, Sequelize } from 'sequelize';

export default function TicketFactory(sequelize: Sequelize) {
    class Ticket extends Model {}
    Ticket.init(
        {
            id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
            name: { type: DataTypes.STRING, allowNull: false },
            status: { type: DataTypes.STRING, allowNull: false },
            description: { type: DataTypes.STRING, allowNull: false },
            assignedUserId: { type: DataTypes.INTEGER, allowNull: true },
        },
        {
            sequelize,
            tableName: 'tickets',
        }
    );
    return Ticket;
}
