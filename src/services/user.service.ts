import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

export const createUser = async (email: string, password: string, name: string) => {
  const apiKey = uuidv4();
  return await prisma.user.create({
    data: { email, password, name, apiKey },
  });
};

export const getUserByApiKey = async (apiKey: string) => {
  return await prisma.user.findUnique({ where: { apiKey } });
};
export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({ where: { email } });
};
export const getAllUsers = async () => {
  return await prisma.user.findMany();
};
export const updateUser = async (id: number, email: string, password: string) => {
  return await prisma.user.update({
    where: { id: String(id) },
    data: { email, password },
  });
};
export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error('Invalid email or password');
  }

  // For demonstration, compare plain text passwords.
  // In production, use bcrypt or argon2 to hash and compare passwords.
  if (user.password !== password) {
    throw new Error('Invalid email or password');
  }

  // Generate a simple JWT token (replace 'your_jwt_secret' with a real secret in production)
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    'your_jwt_secret',
    { expiresIn: '1h' }
  );

  return { token, apiKey: user.apiKey };
};

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({ where: { id: String(id) } });
};

export const deleteUser = async (id: number) => {
  return await prisma.user.delete({ where: { id: String(id) } });
};

// ...existing code...

export const getUserProfile = async (id: number) => {
  return await prisma.user.findUnique({ where: { id: String(id) } });
};

export const updateUserProfile = async (id: number, name: string, email: string) => {
  return await prisma.user.update({
    where: { id: String(id) },
    data: { name, email },
  });
};

export const changePassword = async (id: number, oldPassword: string, newPassword: string) => {
  const user = await prisma.user.findUnique({ where: { id: String(id) } });
  if (!user) throw new Error('User not found');
  if (user.password !== oldPassword) throw new Error('Old password is incorrect');
  await prisma.user.update({
    where: { id: String(id) },
    data: { password: newPassword },
  });
};

export const forgotPassword = async (email: string) => {
  // In a real app, generate a reset token and send email
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('User not found');
  // Example: Save a reset token (not implemented here)
  // await prisma.user.update({ where: { email }, data: { resetToken } });
};

export const resetPassword = async (token: string, newPassword: string) => {
  // In a real app, find user by reset token
  // Example: const user = await prisma.user.findUnique({ where: { resetToken: token } });
  // For demonstration, just throw an error
  throw new Error('Reset password not implemented. Add your logic here.');
};