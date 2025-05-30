import path, { join } from "path";
import { static as useStatic } from "express";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const configViewEngine = (app) => {
  // config template engine
  app.set("views", join(__dirname, "../views"));
  app.set("view engine", "ejs");

  // config static file
  app.use(useStatic(join(__dirname, "../public")));
};

export default configViewEngine;
