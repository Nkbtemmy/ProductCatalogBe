import { Router } from 'express';
import * as productCategoryController from '../controllers/productCategory.controller';

const router = Router();

// Get all categories
router.get('/', productCategoryController.getAllCategories);

// Create a new category
router.post('/', productCategoryController.createCategory);

// Get category by ID
// router.get('/:id', productCategoryController.getCategoryById);

// Delete category
router.delete('/:id', productCategoryController.deleteCategory);

// Update category
router.put('/:id', productCategoryController.updateCategory);

// Get category by name
// router.get('/name/:name', productCategoryController.getCategoryByName);

// Get categories with products
router.get('/with-products/all', productCategoryController.getCategoriesWithProducts);

// Get category by product ID
// router.get('/by-product/:productId', productCategoryController.getCategoryByProductId);

// Get category by name or create
router.post('/name-or-create', productCategoryController.getCategoryByNameOrCreate);

// Get category by ID or create
router.post('/id-or-create', productCategoryController.getCategoryByIdOrCreate);

// Get category by name or update
router.put('/name-or-update', productCategoryController.getCategoryByNameOrUpdate);

// Get category by ID or update
router.put('/id-or-update', productCategoryController.getCategoryByIdOrUpdate);

export default router;