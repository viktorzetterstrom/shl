import express from "express";
import cors from "cors";
import { gamesRouter } from "./routes/games";
import { goaliesRouter } from "./routes/goalies";
import { skatersRouter } from "./routes/skaters";
import { standingsRouter } from "./routes/standings";
import { winstreaksRouter } from "./routes/winstreaks";

const app = express();

app.use(cors());

app.use(gamesRouter);
app.use(goaliesRouter);
app.use(skatersRouter);
app.use(standingsRouter);
app.use(winstreaksRouter);

app.get("*", (req, res) => {
  res.send("404");
});

export { app as shlApiApp };
