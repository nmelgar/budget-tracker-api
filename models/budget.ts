import mongoose, { Schema } from "mongoose";
//create schema
let Transactions;

if (mongoose.modelNames().includes("Contacts")) {
  // if the model exists, use the existing model
  Transactions = mongoose.model("Transactions");
  console.log("Transactions model already exists, using the existing definition.");
} else {
  const transactionsSchema = new mongoose.Schema(
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
  Transactions = mongoose.model("Contacts", transactionsSchema);
  console.log("Transactions model defined.");
}
module.exports = Transactions;
