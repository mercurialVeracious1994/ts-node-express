import {DataTypes, Model, Optional, UUIDV4} from 'sequelize';
// @ts-ignore
import {sequelize} from '../config/database';
// @ts-ignore
import {User} from "./User";

interface PostAttributes {
    id: string;
    title: string;
    content: string;
    isPublished: boolean;
    authorId: string;
}

interface PostCreationAttributes
    extends Optional<PostAttributes, 'id'> {
}

class Post
    extends Model<PostAttributes, PostCreationAttributes>
    implements PostAttributes {
    public id!: string;
    public title!: string;
    public content!: string;
    public isPublished!: boolean;
    public authorId!: string;

    public static associate() {
        Post.belongsTo(User, {foreignKey: 'authorId'});
    }
}

Post.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isPublished: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        authorId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        modelName: 'posts',
        tableName: 'post',
        timestamps: true,
    },
);

export {Post, PostAttributes, PostCreationAttributes};