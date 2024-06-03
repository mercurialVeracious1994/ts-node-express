import {DataTypes, Model, Optional, UUIDV4} from 'sequelize';
// @ts-ignore
import {sequelize} from '../config/database';

interface UserAttributes {
    id: string;
    name: string;
    postId: string[];
}

interface UserCreationAttributes
    extends Optional<UserAttributes, 'id'> {
}

class User
    extends Model<UserAttributes, UserCreationAttributes>
    implements UserAttributes {
    public id!: string;
    public name!: string;
    public postId!: [string];
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        postId: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        }
    },
    {
        sequelize,
        modelName: 'users',
        tableName: 'user',
        timestamps: true,
    },
);

export {User, UserAttributes, UserCreationAttributes};