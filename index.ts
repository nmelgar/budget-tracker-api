import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/restful-api";
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/retful-api";

mongoose.connect(MONGODB_URI);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

// define  port | // start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
