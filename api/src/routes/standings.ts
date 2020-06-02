import express from "express";
import { cache } from "../services/cache";

const router = express.Router();

router.get("/api/standings", (_, res) => {
  res.send("standings");
});
export { router as standingsRouter };
