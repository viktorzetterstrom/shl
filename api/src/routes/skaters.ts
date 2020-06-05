import express from "express";
import { cache } from "../services/cache";
import { shlClient } from "../services/shl";

const router = express.Router();
router.get("/api/skaters", async (req, res) => {
  const skaters = await shlClient.season(2019).statistics.skaters();
  const cacheKey = req.path;
  cache.set(cacheKey, JSON.stringify(skaters));
  res.send({ source: "api", data: skaters });
});

export { router as skatersRouter };
