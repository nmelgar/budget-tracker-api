import mongoose, { Schema } from "mongoose";

const UsersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    googleId: {
      type: String,
      unique: true,
    },
  },
  {
    versionKey: false,
  }
);

export const User = mongoose.model("User", UsersSchema);
