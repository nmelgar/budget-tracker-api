import mongoose, { Schema } from "mongoose";


const TransactionsSchema = new Schema(
    {
      amount: {
        type: Number,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      transactionDate: {
        type: Date,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
    {
      versionKey: false,
    }
  );

export const Transaction = mongoose.model("Transaction", TransactionsSchema);
