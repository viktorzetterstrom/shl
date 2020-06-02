import { shlApiApp } from "./app";
import { cache } from "./services/cache";

const start = () => {
  if (!process.env.REDIS_HOST) {
    throw new Error("Could not find REDIS_HOST enviroment variable");
  }
  if (!process.env.REDIS_PORT) {
    throw new Error("Could not find REDIS_PORT enviroment variable");
  }
  if (!process.env.SHL_ID) {
    throw new Error("Could not find SHL_ID enviroment variable");
  }
  if (!process.env.SHL_SECRET) {
    throw new Error("Could not find SHL_SECRET enviroment variable");
  }

  cache.connect();

  shlApiApp.listen(3000, () => `SHL api listening on port ${3000}`);
};

start();
