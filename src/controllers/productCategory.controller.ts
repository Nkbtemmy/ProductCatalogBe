import { Request, Response, NextFunction } from 'express';
import * as productCategoryService from '../services/productCategory.service';

// Get all categories
export const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await productCategoryService.getAllCategories();
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

// Create a new category
export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    const category = await productCategoryService.createCategory(name);
    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};

// Get category by ID
export const getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const category = await productCategoryService.getCategoryById(id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (err) {
    next(err);
  }
};

// Delete category
export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const category = await productCategoryService.deleteCategory(id);
    res.json(category);
  } catch (err) {
    next(err);
  }
};

// Update category
export const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const category = await productCategoryService.updateCategory(id, name);
    res.json(category);
  } catch (err) {
    next(err);
  }
};

// Get category by name
export const getCategoryByName = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.params;
    const category = await productCategoryService.getCategoryByName(name);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (err) {
    next(err);
  }
};

// Get categories with products
export const getCategoriesWithProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await productCategoryService.getCategoriesWithProducts();
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

// Get category by product ID
export const getCategoryByProductId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { productId } = req.params;
    const category = await productCategoryService.getCategoryByProductId(productId);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (err) {
    next(err);
  }
};

// Get category by name or create
export const getCategoryByNameOrCreate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    const category = await productCategoryService.getCategoryByNameOrCreate(name);
    res.json(category);
  } catch (err) {
    next(err);
  }
};

// Get category by ID or create
export const getCategoryByIdOrCreate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id, name } = req.body;
    const category = await productCategoryService.getCategoryByIdOrCreate(id, name);
    res.json(category);
  } catch (err) {
    next(err);
  }
};

// Get category by name or update
export const getCategoryByNameOrUpdate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, newName } = req.body;
    const category = await productCategoryService.getCategoryByNameOrUpdate(name, newName);
    res.json(category);
  } catch (err) {
    next(err);
  }
};

// Get category by ID or update
export const getCategoryByIdOrUpdate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id, name } = req.body;
    const category = await productCategoryService.getCategoryByIdOrUpdate(id, name);
    res.json(category);
  } catch (err) {
    next(err);
  }
};