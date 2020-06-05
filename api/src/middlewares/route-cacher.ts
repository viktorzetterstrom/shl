import { Request, Response, NextFunction } from "express";
import { cache } from "../services/cache";

export const routeCacher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cacheKey = req.path;
  const cached = await cache.get(cacheKey);
  if (cached) {
    return res.send({ source: "cache", data: JSON.parse(cached) });
  }
  next();
};
