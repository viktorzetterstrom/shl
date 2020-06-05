import { ShlClient } from "./client";
import { ShlConnection } from "./connection";

export const shlClient = new ShlClient(
  new ShlConnection(process.env.SHL_ID!, process.env.SHL_SECRET!)
);
