import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.service';

// Register a new user
export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, name } = req.body;
    const existingUser = await userService.getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists or invalid.' });
    }
    const user = await userService.createUser(email, password, name);
    res.status(201).json({ email: user.email, apiKey: user.apiKey });
  } catch (err) {
    next(err);
  }
};

// Login user
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const result = await userService.loginUser(email, password);
    res.status(200).json({ email, token: result.token, api_key: result.apiKey });
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
};

// Get all users
export const getAllUsers = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

// Get user by API key
export const getUserByApiKey = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { apiKey } = req.params;
    const user = await userService.getUserByApiKey(apiKey);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    next(err);
  }
};

// Update user
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { email, password } = req.body;
    const user = await userService.updateUser(Number(id), email, password);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

// Delete user
export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(Number(id));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

// Get user profile
export const getUserProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserProfile(Number(id));
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    next(err);
  }
};

// Update user profile
export const updateUserProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await userService.updateUserProfile(Number(id), name, email);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

// Change password
export const changePassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { oldPassword, newPassword } = req.body;
    await userService.changePassword(Number(id), oldPassword, newPassword);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

// Forgot password
export const forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;
    await userService.forgotPassword(email);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

// Reset password
export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token, newPassword } = req.body;
    await userService.resetPassword(token, newPassword);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};