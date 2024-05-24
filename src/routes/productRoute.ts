import {Router} from 'express';
import {createProduct, getAllProduct, getProductByID, updateProduct} from "../controller/ProductController";

const router = Router();


router.get('/:id', getProductByID);

router.get('/', getAllProduct);

router.post('/', createProduct);

router.patch('/', updateProduct);

export default router;