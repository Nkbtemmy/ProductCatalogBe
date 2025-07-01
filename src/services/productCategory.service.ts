// src/services/productCategory.service.ts
import { PrismaClient, ProductCategory } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllCategories = async (): Promise<ProductCategory[]> => {
  return prisma.productCategory.findMany({
    include: { products: true },
    orderBy: { createdAt: 'desc' },
  });
};

export const createCategory = async (name: string): Promise<ProductCategory> => {
  return prisma.productCategory.create({
    data: { name },
  });
};

export const getCategoryById = async (id: string): Promise<ProductCategory | null> => {
  return prisma.productCategory.findUnique({
    where: { id },
    include: { products: true },
  });
};

export const deleteCategory = async (id: string): Promise<ProductCategory> => {
  return prisma.productCategory.delete({
    where: { id },
  });
};
export const updateCategory = async (id: string, name: string): Promise<ProductCategory> => {
  return prisma.productCategory.update({
    where: { id },
    data: { name },
  });
};
export const getCategoryByName = async (name: string): Promise<ProductCategory | null> => {
  return prisma.productCategory.findUnique({
    where: { name },
  });
};
export const getCategoriesWithProducts = async (): Promise<ProductCategory[]> => {
  return prisma.productCategory.findMany({
    include: { products: true },
    orderBy: { createdAt: 'desc' },
  });
};
export const getCategoryByProductId = async (productId: string): Promise<ProductCategory | null> => {
  return prisma.productCategory.findFirst({
    where: { products: { some: { id: productId } } },
  });
};
export const getCategoryByNameOrCreate = async (name: string): Promise<ProductCategory> => {
  let category = await getCategoryByName(name);
  if (!category) {
    category = await createCategory(name);
  }
  return category;
};
export const getCategoryByIdOrCreate = async (id: string, name: string): Promise<ProductCategory> => {
  let category = await getCategoryById(id);
  if (!category) {
    category = await createCategory(name);
  }
  return category;
};
export const getCategoryByNameOrUpdate = async (name: string, newName: string): Promise<ProductCategory> => {
  let category = await getCategoryByName(name);
  if (category) {
    category = await updateCategory(category.id, newName);
  } else {
    category = await createCategory(newName);
  }
  return category;
};
export const getCategoryByIdOrUpdate = async (id: string, name: string): Promise<ProductCategory> => {
  let category = await getCategoryById(id);
  if (category) {
    category = await updateCategory(category.id, name);
  } else {
    category = await createCategory(name);
  }
  return category;
};