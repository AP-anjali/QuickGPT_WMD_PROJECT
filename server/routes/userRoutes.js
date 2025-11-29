// /server/routes/userRoutes.js
import express from 'express';
import { registerUser, loginUser, getUser, getPublishedImages, getUserById, updateUserCredits } from '../controllers/userController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

// GET /api/users/published-images
router.get('/published-images', getPublishedImages);

// POST /api/users/register
router.post('/register', registerUser);

// POST /api/users/login
router.post('/login', loginUser);

// GET /api/users/me
router.get('/me', protect, getUser);

// GET /api/users/:id
router.get('/:id', protect, getUserById);

// PATCH /api/users/:id/credits -> update credits (used by admin or webhook)
router.patch('/:id/credits', protect, updateUserCredits);


export default router;
