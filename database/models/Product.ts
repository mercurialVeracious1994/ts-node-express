import {DataTypes, Model, Optional, UUIDV4} from 'sequelize';
// @ts-ignore
import {sequelize} from '../config/database';

interface ProductAttributes {
    id: string;
    name: string;
    price: number;
}

interface ProductCreationAttributes
    extends Optional<ProductAttributes, 'id'> {
}

class Product
    extends Model<ProductAttributes, ProductCreationAttributes>
    implements ProductAttributes {
    public id!: string;
    public name!: string;
    public price!: number;
}

Product.init(
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
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'products',
        tableName: 'product',
        timestamps: true,
    },
);

export {Product, ProductAttributes, ProductCreationAttributes};