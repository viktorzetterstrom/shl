import express from "express";
import { cache } from "../services/cache";

const router = express.Router();

router.get("/api/winstreaks", (req, res) => {
  res.send("winstreaks");
});
export { router as winstreaksRouter };
