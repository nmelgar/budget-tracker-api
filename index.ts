import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import swaggerDocs from "./utils/swagger";
import transactionRoutes from "./routes/routes";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();
app.use(express.json());
app.set("view engine", "ejs");
// app.set("views", "./views");
const PORT = 3000;

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/budget-api";

mongoose.connect(MONGODB_URI);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use("/", transactionRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  swaggerDocs(app, PORT);
});
