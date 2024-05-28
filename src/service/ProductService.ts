import {Product, ProductCreationAttributes} from "../../database/models/Product";
import {StatusCodes} from 'http-status-codes';
import ApiError from "../error/ApiError";
import {logger} from "../utility/Logger";

interface IProductService {
    getById(id: string): Promise<Product | ApiError>

    getAllProducts(): Promise<Product[] | ApiError>

    createProduct(payload: ProductCreationAttributes): Promise<Product | ApiError>

    updateProduct(id: string, payload: Partial<ProductCreationAttributes>): Promise<Product | ApiError>
}

export const ProductService: IProductService = {
    getById: async (id: string): Promise<Product | ApiError> => {
        console.log(id, "-------------------------");
        const product = await Product.findByPk(id);
        if (!product) {
            const error = new ApiError(StatusCodes.NOT_FOUND, 'Product not found');
            logger.error(error);
            return error;
        }
        return product;
    },
    getAllProducts: async () => {
        const products = await Product.findAll();
        if (!products) {
            const error = new ApiError(StatusCodes.NOT_FOUND, ' No Product found');
            logger.error(error);
            return error;
        }
        return products;
    },
    createProduct: async (payload: ProductCreationAttributes) => {
        const product = Product.create(payload);
        if (!product) {
            const error = new ApiError(StatusCodes.BAD_REQUEST, ' No Product Created');
            logger.error(error);
            return error;
        }
        return product;
    },
    updateProduct: async (id: string, payload: Partial<ProductCreationAttributes>) => {
        const product = await Product.findByPk(id);
        if (!product) {
            const error = new ApiError(StatusCodes.NOT_FOUND, ' No Product found');
            logger.error(error);
            return error;
        }
        return product.update(payload);
    }
}