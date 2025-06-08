import express from "express";
import {
  getTransactions,
  postTransaction,
  updateTransaction,
  deleteTransaction,
  getHome,
} from "../controllers/transactionsController";

const router = express.Router();

// Home route
router.get("/", getHome);

// GET all transactions
router.get("/transactions", getTransactions);

// POST new transaction
router.post("/transactions", postTransaction);

// PUT to modify a transaction
router.put("/transactions/:id", updateTransaction);

// DELETE a transaction
router.delete("/transactions/:id", deleteTransaction);

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

/**
 * @swagger
 * /transactions/{id}:
 *   put:
 *     summary: Update a transaction
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The transaction ID
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
 *       200:
 *         description: Transaction updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Transaction not found
 *       500:
 *         description: Failed to update transaction
 */
/**
 * @swagger
 * /transactions/{id}:
 *   delete:
 *     summary: Delete a transaction
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The transaction ID
 *     responses:
 *       200:
 *         description: Transaction deleted successfully
 *       404:
 *         description: Transaction not found
 *       500:
 *         description: Failed to delete transaction
 */

export default router;
