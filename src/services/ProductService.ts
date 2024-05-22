import {Product, ProductCreationAttributes} from "../../database/models/Product";
import {StatusCodes} from 'http-status-codes';
import ApiError from "../error/ApiError";

interface IProductService {
    getById(id: string): Promise<Product | null>

    getAllProducts(): Promise<Product[] | null>

    createProduct(payload: ProductCreationAttributes): Promise<Product>

    updateProduct(id: string, payload: Partial<ProductCreationAttributes>): Promise<Product>
}

export const ProductService: IProductService = {
    getById: async (id: string): Promise<Product | null> => {
        try {
            const product = await Product.findByPk(id);
            if (!product) {
                throw new ApiError(StatusCodes.NOT_FOUND, 'Product not found');
            }
            return product;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    getAllProducts: async () => {
        try {
            const products = await Product.findAll();
            if (!products) {
                throw new ApiError(StatusCodes.NOT_FOUND, ' No Product found');
            }
            return products;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    createProduct: async (payload: ProductCreationAttributes) => {
        try {
            return Product.create(payload);

        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    updateProduct: async (id: string, payload: Partial<ProductCreationAttributes>) => {
        try {
            const product = await Product.findByPk(id);
            if (!product) {
                throw new ApiError(
                    StatusCodes.NOT_FOUND,
                    'Enquiry not found',
                );
            }
            return product.update(payload);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}