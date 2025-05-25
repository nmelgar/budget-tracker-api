import express, { Router, Request, Response } from "express";
import { Transaction } from "../models/budget";

// get all transactions
export const getTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch transactions" });
  }
};

// post a new transaction
export const postTransaction = async (req: Request, res: Response) => {
  const transaction = new Transaction({
    amount: req.body.amount,
    type: req.body.type,
    transactionDate: req.body.transactionDate,
    description: req.body.description,
  });
  try {
    const newTransaction = await transaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(400).json({ message: "Error adding the new transaction" });
  }
};
