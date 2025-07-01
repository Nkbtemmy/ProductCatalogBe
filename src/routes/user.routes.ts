import { Router, RequestHandler } from 'express';
import * as userController from '../controllers/user.controller';

const router = Router();

// Register a new user
router.post('/register', (req, res, next) => {
    userController.registerUser(req, res, next);
});

// Login user
router.post('/login', userController.loginUser);

// Get all users
router.get('/', userController.getAllUsers);

// Get user by API key
router.post('/apikey/:apiKey', (req, res, next) => {
    userController.getUserByApiKey(req, res, next);
});

// Update user
router.put('/:id', userController.updateUser);

// Delete user
router.delete('/:id', userController.deleteUser);

// Get user profile
router.post('/profile/:id', (req, res, next) => {
    userController.getUserProfile(req, res, next);
});

// Update user profile
router.put('/profile/:id', userController.updateUserProfile);

// Change password
router.post('/change-password/:id', userController.changePassword);

// Forgot password
router.post('/forgot-password', userController.forgotPassword);

// Reset password
router.post('/reset-password', userController.resetPassword);

export default router;