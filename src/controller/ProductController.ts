import {ProductService} from "../services/ProductService";
import {Request, Response} from "express";
import {IProductRequest} from "../request/productRequest";
import ApiError from "../error/ApiError";

export const getProductByID = async (req: Request, res: Response) => {
    const id = (req.params.id) as string || "";
    const result = await ProductService.getById(id);
    if (result instanceof ApiError) {
        res.status(result.statusCode).json(result)
    }
    res.status(200).json({product: result});
}
export const getAllProduct = async (req: Request, res: Response) => {
    const result = await ProductService.getAllProducts();
    if (result instanceof ApiError) {
        res.status(result.statusCode).json(result)
    }
    res.status(200).json({products: result});
}
export const updateProduct = async (req: Request, res: Response) => {
    const product = req.body as IProductRequest;
    const id = req.query.id as string || "";
    const result = await ProductService.updateProduct(id, product);
    if (result instanceof ApiError) {
        res.status(result.statusCode).json(result)
    }
    res.status(201).json({product: result});
}
export const createProduct = async (req: Request, res: Response) => {
    const product = req.body as IProductRequest;
    const result = await ProductService.createProduct(product);
    if (result instanceof ApiError) {
        res.status(result.statusCode).json(result)
    }
    res.status(201).json({products: result});
}
