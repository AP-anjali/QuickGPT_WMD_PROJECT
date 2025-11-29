// /server/routes/chatRoutes.js
import express from 'express';
import {
  createChat,
  getChats,
  getChatById,
  updateChat,
  deleteChat,
} from '../controllers/chatController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

// GET /api/chats -> list user's chats
router.get('/', protect, getChats);

// POST /api/chats -> create new chat
router.post('/', protect, createChat);

// GET /api/chats/:id -> get one chat
router.get('/:id', protect, getChatById);

// PUT /api/chats/:id -> update chat (rename or replace)
router.put('/:id', protect, updateChat);

// DELETE /api/chats/:id -> delete chat
router.delete('/:id', protect, deleteChat);

export default router;
