import express from "express";
import { cache } from "../services/cache";
import { shlClient } from "../services/shl";
import { RoutePaths } from "./route-paths";

const router = express.Router();
router.get(RoutePaths.Games, async (req, res) => {
  const games = await shlClient.season(2019).games();
  const cacheKey = req.path;
  cache.set(cacheKey, JSON.stringify(games));
  res.send({ source: "api", data: games });
});

export { router as gamesRouter };
