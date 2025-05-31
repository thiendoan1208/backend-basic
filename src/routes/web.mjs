import express from "express";
import { getAllUser, getUserDetail } from "../controller/homeController.mjs";

const router = express.Router();

// Khai báo routes
router.get("/", getAllUser);
router.get("/details/:userID", getUserDetail);

export default router;
