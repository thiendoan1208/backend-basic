import express from "express";
import configViewEngine from "./configs/viewEngine.mjs";
import { config } from "dotenv";
config();

const app = express();
const port = process.env.PORT || 4000;
const hostname = process.env.HOST_NAME;

app.get("/", (req, res) => {
  res.render("home.ejs");
});

// config viewEngine
configViewEngine(app);

app.listen(port, hostname, () => {
  console.log(`Example app listening on: http://${hostname}:${port}`);
});
