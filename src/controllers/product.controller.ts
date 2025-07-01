import { Request, Response } from 'express';
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from '../services/product.service';

/**
 * Controller to handle product listing and creation.
 * Expects product details in the request body for creation.
 * Returns a list of products or the created product on success.
 * Returns an error message if required fields are missing or if creation fails.
 */
export const listProducts = async (req: Request, res: Response) => {
  const products = await getAllProducts();
  return res.status(200).json(products);
};

export const addProduct = async (req: Request, res: Response) => {
  const { name, categoryId, price } = req.body;

  if (!name || !categoryId || price === undefined) {
    return res.status(400).json({ error: 'Name, categoryId, and price are required.' });
  }

  try {
    const product = await createProduct(name, categoryId, price);
    return res.status(201).json(product);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to create product.' });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await getProductById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch product.' });
  }
};

export const updateProductController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, categoryId, price } = req.body;
  try {
    const product = await updateProduct(id, { name, categoryId, price });
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to update product.' });
  }
};

export const deleteProductController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteProduct(id);
    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ error: 'Failed to delete product.' });
  }
};
