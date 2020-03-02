import { Schema, model, Document } from "mongoose";

interface userDocument extends Document {
  email: string;
  name: string;
  password: string;
}
const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String
  },
  {
    timestamps: true
  }
);

export const User = model<userDocument>("User", userSchema);
