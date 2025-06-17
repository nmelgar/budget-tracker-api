import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import swaggerDocs from "./utils/swagger";
import transactionRoutes from "./routes/routes";
import authRoutes from "./routes/authRoutes";
import "./config/passportSetup";

dotenv.config();
const clientSecret = process.env.GOOGLE_CLIENT_SECRET || "";

const app = express();
app.use(express.json());
app.set("view engine", "ejs");

// for the session / cookie
app.use(
  session({
    secret: clientSecret,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }, // 24 hours
  })
);

// initialize passport and session for login
app.use(passport.initialize());
app.use(passport.session());
// app.set("views", "./views");
const PORT = 3000;

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/budget-api";

mongoose.connect(MONGODB_URI);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

// middleware for session management
app.use(
  session({
    secret: clientSecret,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use("/", transactionRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  swaggerDocs(app, PORT);
});
