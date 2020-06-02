import express from "express";
import { cache } from "../services/cache";

const router = express.Router();
router.get("/api/goalies", async (_, res) => {
  console.log(cache);
  const test = await cache.get("test");
  console.log(test);
  res.send(test);
});

export { router as goaliesRouter };
