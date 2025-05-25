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

module.exports = {
  getTransactions: getTransactions,
};
