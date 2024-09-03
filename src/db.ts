import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseCon {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}
let cached: MongooseCon = (global as any).mongoose;
if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connect = async () => {
  if (cached.conn) return cached.conn;
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "Home Page",
      bufferCommands: false,
      connectTimeoutMS: 30000,
    });
    cached.conn = await cached.promise
    return cached.promise
};
