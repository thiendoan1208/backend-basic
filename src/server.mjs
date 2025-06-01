import express from "express";
import configViewEngine from "./configs/viewEngine.mjs";
import webRouter from "./routes/web.mjs";
import { config } from "dotenv";
import apiRouter from "./routes/api.mjs";
config();

const app = express();
const port = process.env.PORT || 4000;
const hostname = process.env.HOST_NAME;

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", webRouter);
app.use("/api", apiRouter);

// config viewEngine
configViewEngine(app);

// Run app
app.listen(port, hostname, () => {
  console.log(`Example app listening on: http://${hostname}:${port}`);
});
