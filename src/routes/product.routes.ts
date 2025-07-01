import { RequestHandler, Router } from 'express';
import { 
    listProducts, 
    addProduct, 
    getProduct, 
    updateProductController, 
    deleteProductController 
} from '../controllers/product.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// All routes require authentication
router.use(authenticate as RequestHandler);

router.get('/', (req, res, next) => {
    listProducts(req, res).catch(next);
});
router.post('/', (req, res, next) => {
    addProduct(req, res).catch(next);
});
router.get('/:id', (req, res, next) => {
    getProduct(req, res).catch(next);
});
router.put('/:id', (req, res, next) => {
    updateProductController(req, res).catch(next);
});
router.delete('/:id', (req, res, next) => {
    deleteProductController(req, res).catch(next);
});

export default router;
