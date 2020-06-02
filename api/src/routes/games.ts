import express from "express";
import { cache } from "../services/cache";

const router = express.Router();
router.get("/api/games", (_, res) => {
  cache.set("test", "Hello there!");
  console.log(process.env.REDIS_HOST);
  console.log(process.env.REDIS_PORT);
  res.send("games");
});

export { router as gamesRouter };
