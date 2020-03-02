import express from "express";
import { SESSION_OPTIONS } from "./config";
import session, { Store } from "express-session";

import { register } from "./routes";

export const createApp = (store: Store) => {
  const app = express();
  app.use(express.json());
  app.use(
    session({
      ...SESSION_OPTIONS,
      store: store
    })
  );

  app.use(register);

  return app;
};
