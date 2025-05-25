import express from "express";
import {
  getTransactions,
  postTransaction,
} from "../controllers/transactionsController";

const router = express.Router();

// GET all transactions
router.get("/transactions", getTransactions);

// POST new transaction
router.post("/transactions", postTransaction);

/**
 * @swagger
 * /transactions:
 *   get:
 *     summary: Get all transactions
 *     responses:
 *       200:
 *         description: A list of all the transactions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: No transactions were found
 *
 */

/**
 * @swagger
 * /transactions:
 *   post:
 *     summary: Create a new transaction
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - amount
 *               - type
 *               - transactionDate
 *               - description
 *             properties:
 *               amount:
 *                 type: string
 *               type:
 *                 type: string
 *               transactionDate:
 *                 type: string
 *                 format: date
 *               description:
 *                 type: string
 *           example:
 *             amount: 25
 *             type: food
 *             transactionDate: 1980-09-12
 *             description: This was a transaction to buy chips
 *     responses:
 *       201:
 *         description: Transaction created successfully
 *       400:
 *         description: Invalid input
 */

export default router;
