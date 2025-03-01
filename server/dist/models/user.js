import { DataTypes, Model } from 'sequelize';
export default function UserFactory(sequelize) {
    class User extends Model {
    }
    User.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        username: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
    }, {
        sequelize,
        tableName: 'users',
    });
    return User;
}
