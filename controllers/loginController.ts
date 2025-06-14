import express, { Router, Request, Response } from "express";
import { Transaction } from "../models/budget";
import passport from "passport";

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
export const googleAuth = passport.authenticate("google", {
  scope: ["profile"],
});

// google redirect
export const googleRedirect = passport.authenticate("google", {
  // handle with passport
  failureRedirect: "/login",
  successRedirect: "/transactions",
});
