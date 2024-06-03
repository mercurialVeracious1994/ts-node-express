import {Router} from 'express';
import {createProduct, getAllProduct, getProductByID, updateProduct} from "../controller/ProductController";
import {productCreateValidation, productUpdateValidation} from "../validation/ProductValidations";
import {validate} from "../validation/common";

const router = Router();

router.get('/:id', getProductByID);

router.get('/', getAllProduct);

router.post('/', productCreateValidation, validate, createProduct);

router.patch('/', productUpdateValidation, validate, updateProduct);

export default router;