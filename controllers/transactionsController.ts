import express, { Router, Request, Response } from "express";
import { Transaction } from "../models/budget";

// home route
export const getHome = (req: Request, res: Response) => {
  res.render("home", { title: "Budget Tracker API" });
};

// get all transactions
export const getTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch transactions" });
  }
};

// get transaction by ID
export const getTransactionById = async (req: Request, res: Response) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch transaction" });
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

// PUT to modify a transaction
export const updateTransaction = async (req: Request, res: Response) => {
  try {
    const transactionId = req.params.id;
    const transaction = await Transaction.findByIdAndUpdate(
      transactionId,
      req.body,
      { new: true, runValidators: true }
    );
    if (transaction) {
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ message: "Transaction not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update transaction" });
  }
};

// DELETE a transaction
export const deleteTransaction = async (req: Request, res: Response) => {
  try {
    const transactionId = req.params.id;
    const transaction = await Transaction.findByIdAndDelete(transactionId);
    if (transaction) {
      res.status(200).json({ message: "Transaction deleted successfully" });
    } else {
      res.status(404).json({ message: "Transaction not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete transaction" });
  }
};
