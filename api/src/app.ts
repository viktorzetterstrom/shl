import express from "express";
import cors from "cors";
import morgan from "morgan";
import { gamesRouter } from "./routes/games";
import { goaliesRouter } from "./routes/goalies";
import { skatersRouter } from "./routes/skaters";
import { standingsRouter } from "./routes/standings";
import { winstreaksRouter } from "./routes/winstreaks";
import { routeCacher } from "./middlewares/route-cacher";

const app = express();

app.use(morgan("combined"));
app.use(cors());
app.use(routeCacher);

app.use(gamesRouter);
app.use(goaliesRouter);
app.use(skatersRouter);
app.use(standingsRouter);
app.use(winstreaksRouter);

app.get("*", (_, res) => {
  res.status(404).send();
});

export { app as shlApiApp };
