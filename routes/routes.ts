import express from "express";
import { getTransactions } from "../controllers/transactionsController";

const router = express.Router();

// GET all transactions
router.get("/transactions", getTransactions);

export default router;
