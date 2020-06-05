import express from "express";
import { cache } from "../services/cache";
import { shlClient } from "../services/shl";

const router = express.Router();
router.get("/api/winstreaks", async (req, res) => {
  const winstreaks = await shlClient.season(2019).statistics.teams.winstreaks();
  const cacheKey = req.path;
  cache.set(cacheKey, JSON.stringify(winstreaks));
  res.send({ source: "api", data: winstreaks });
});

export { router as winstreaksRouter };
