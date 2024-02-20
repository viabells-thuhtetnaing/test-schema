import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema: Schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

export const UserTestModel = mongoose.model<IUser>("UserTest", userSchema);
