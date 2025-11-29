// /server/routes/creditRoutes.js
import express from 'express';
import { getPlans, purchasePlan, getTransactions, updateTransaction } from '../controllers/creditController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.get('/plans', getPlans);             // public
router.post('/purchase', protect, purchasePlan); // create stripe session (POST)
router.get('/transactions', protect, getTransactions); // GET user's transactions
router.patch('/transactions/:id', protect, updateTransaction); // PATCH transaction (webhook/manual)

export default router;
