import express from "express";
import {
  getAllUser,
  getUserDetail,
  createUserPage,
  createNewUSer,
  getEditUserPage,
  editUser,
  deleteUser,
} from "../controller/homeController.mjs";

const router = express.Router();

// Khai báo routes
router.get("/", getAllUser);
router.get("/details/:userID", getUserDetail);

// create new user
router.get("/create-user-page", createUserPage);
router.post("/create-user", createNewUSer);

// edit user
router.get("/edit-user-page/:userID", getEditUserPage);
router.post("/edit-user", editUser);

// delete-user
router.post("/delete-user/:userID", deleteUser);

export default router;
