import express from "express";
import { cache } from "../services/cache";
import { shlClient } from "../services/shl";
import { RoutePaths } from "./route-paths";

const router = express.Router();
router.get(RoutePaths.Skaters, async (req, res) => {
  const skaters = await shlClient.season(2019).statistics.skaters();
  const cacheKey = req.path;
  cache.set(cacheKey, JSON.stringify(skaters));
  res.send({ source: "api", data: skaters });
});

export { router as skatersRouter };
