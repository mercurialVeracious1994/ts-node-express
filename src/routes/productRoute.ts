import {Request, Response, Router} from 'express';
import {IProductRequest} from "../request/productRequest";
import {ProductController} from "../controller/ProductController";

const router = Router();


router.get('/:id', async (req: Request, res: Response) => {
    const id = (req.params.id) as string || "";
    const result = await ProductController.getProductByID(id);
    res.status(200).json({products: result});
});
router.get('/', async (req: Request, res: Response) => {
    const id = (req.query.id) as string || "";
    const result = await ProductController.getAllProducts();
    res.status(200).json({products: result});
});

router.post('/', async (req: Request, res: Response) => {
    const product = req.body as IProductRequest;
    const result = await ProductController.createProduct({
        price: product.price,
        productId: product.productId,
        name: product.name
    });
    res.status(201).json({products: result.dataValues});
});
router.patch('/', async (req: Request, res: Response) => {
    const product = req.body as IProductRequest;
    const id = req.query.id as string || "";
    const result = await ProductController.updateProduct(id, {
        price: product.price,
        name: product.name,
        productId: product.productId
    });
    res.status(201).json({products: result.dataValues});
});

export default router;