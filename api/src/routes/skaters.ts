import express from "express";
import { cache } from "../services/cache";

const router = express.Router();

router.get("/api/skaters", (_, res) => {
  res.send("skaters");
});
export { router as skatersRouter };
