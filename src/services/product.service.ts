import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllProducts = async () => {
  return await prisma.product.findMany();
};

export const createProduct = async (name: string, categoryId: string, price: number) => {
  return await prisma.product.create({
    data: { name, categoryId, price },
  });
};

export const getProductById = async (id: string) => {
  return await prisma.product.findUnique({
    where: { id },
  });
};

// Update a product by ID
export const updateProduct = async (
  id: string,
  data: { name?: string; categoryId?: string; price?: number }
) => {
  return await prisma.product.update({
    where: { id },
    data,
  });
};

// Delete a product by ID
export const deleteProduct = async (id: string) => {
  return await prisma.product.delete({
    where: { id },
  });
};