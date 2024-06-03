import {DataTypes, Model, Optional, UUIDV4} from 'sequelize';
// @ts-ignore
import {sequelize} from '../config/database';

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
            type: DataTypes.STRING,
            allowNull: false,
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