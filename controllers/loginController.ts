import express, { Router, Request, Response } from "express";
import { Transaction } from "../models/budget";

// login route
export const login = (req: Request, res: Response) => {
  res.render("login", { title: "Login | Budget Tracker API" });
};

// logout route
export const logout = (req: Request, res: Response) => {
  // handle with passport
  res.send("Logging out");
};

// auth with google
export const googleAuth = (req: Request, res: Response) => {
  // handle with passport
  res.send("Login with Google is not implemented yet.");
};
