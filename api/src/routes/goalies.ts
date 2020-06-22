import express from "express";
import { cache } from "../services/cache";
import { shlClient } from "../services/shl";
import { RoutePaths } from "./route-paths";

const router = express.Router();
router.get(RoutePaths.Goalies, async (req, res) => {
  const goalies = await shlClient.season(2019).statistics.goalkeepers();
  const cacheKey = req.path;
  cache.set(cacheKey, JSON.stringify(goalies));
  res.send({ source: "api", data: goalies });
});

export { router as goaliesRouter };
