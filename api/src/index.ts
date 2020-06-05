import { shlApiApp } from "./app";
import { shlClient } from "./services/shl";
import { cache } from "./services/cache";

const port = process.env.PORT || 3000;

const start = async () => {
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

  await cache.connect();
  if (!cache.connected) {
    throw new Error("Could not connect to cache");
  }

  await shlClient.connect();
  if (shlClient.connected) {
    throw new Error("SHL client could not connect to external API");
  }

  shlApiApp.listen(port, () => `SHL api listening on port ${port}`);
};

start();
