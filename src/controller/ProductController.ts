import {ProductService} from "../services/ProductService";
import {Product, ProductCreationAttributes} from "../../database/models/Product";

export const ProductController = {
    getProductByID: async (id: string): Promise<Product | null> => {
        return ProductService.getById(id);
    },
    getAllProducts(): Promise<Product[] | null> {
        return ProductService.getAllProducts();
    },
    updateProduct: async (id: string, payload: ProductCreationAttributes): Promise<Product> => {
        return ProductService.updateProduct(id, payload);
    },
    createProduct: async (payload: ProductCreationAttributes): Promise<Product> => {
        return ProductService.createProduct(payload);
    }
}