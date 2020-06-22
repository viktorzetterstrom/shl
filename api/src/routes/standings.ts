import express from "express";
import { cache } from "../services/cache";
import { shlClient } from "../services/shl";
import { RoutePaths } from "./route-paths";

const router = express.Router();
router.get(RoutePaths.Standings, async (req, res) => {
  const standings = await shlClient.season(2019).statistics.teams.standings();
  const cacheKey = req.path;
  cache.set(cacheKey, JSON.stringify(standings));
  res.send({ source: "api", data: standings });
});

export { router as standingsRouter };
