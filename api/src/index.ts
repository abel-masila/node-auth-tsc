import express from "express";
import Redis from "ioredis";
import mongoose from "mongoose";
import session from "express-session";
import connectRedis from "connect-redis";
import {
  REDIS_OPTIONS,
  SESSION_OPTIONS,
  APP_PORT,
  MONGO_OPTIONS,
  MONGO_URI
} from "./config";

(async () => {
  await mongoose.connect(MONGO_URI, MONGO_OPTIONS);
  const RedisStore = connectRedis(session);
  const client = new Redis(REDIS_OPTIONS);
  const app = express();
  app.use(
    session({
      ...SESSION_OPTIONS,
      store: new RedisStore({ client })
    })
  );

  app.get("/", (req, res) => res.json({ message: "Test App" }));

  app.listen(APP_PORT, () => console.log(`http:localhost:${APP_PORT}`));
})();
