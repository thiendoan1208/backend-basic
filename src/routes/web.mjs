import express from "express";
import { getHomePage } from "../controller/homeController.mjs";

const router = express.Router();

// Khai báo routes
router.get("/", getHomePage);

export default router;
