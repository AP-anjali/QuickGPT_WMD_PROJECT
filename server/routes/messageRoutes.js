// /server/routes/messageRoutes.js

import express from 'express';
import { protect } from '../middlewares/auth.js';
import { textMessageController, imageMessageController } from '../controllers/messageController.js';
import { requireCredits } from '../middlewares/creditCheck.js';

const router = express.Router();

// POST /api/messages/text -> generate text (requires 1 credit)
router.post('/text', protect, requireCredits(1), textMessageController);

// POST /api/messages/image -> generate image (requires 2 credits)
router.post('/image', protect, requireCredits(2), imageMessageController);

export default router;
