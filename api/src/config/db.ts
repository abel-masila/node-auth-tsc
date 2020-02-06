import { ConnectionOptions } from "mongoose";
const {
  MONGO_USERNAME = "admin",
  MONGO_PASSWORD = "admin",
  MONGO_HOST = "localhost",
  MONGO_POST = "27017",
  MONGO_DB = "auth"
} = process.env;

export const MONGO_URI = `mongodb://${MONGO_USERNAME}:${encodeURIComponent(
  MONGO_PASSWORD
)}@${MONGO_HOST}:${MONGO_POST}/${MONGO_DB}`;
export const MONGO_OPTIONS: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
