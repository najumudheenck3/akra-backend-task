import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  phone: string;
  email: string;
  address: string;
  postalZip: string;
  region: string;
  country: string;
  list: string;
  text: string;
  numberrange: string;
  currency: string;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  postalZip: {
    type: String,
  },
  region: {
    type: String,
  },
  country: {
    type: String,
  },
  list: {
    type: String,
  },
  text: {
    type: String,
  },
  numberrange: {
    type: String,
  },
  currency: {
    type: String,
  },
});

export default mongoose.model<IUser>("user", UserSchema);
