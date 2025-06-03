import express from "express";
import {
  getAllUser,
  createNewUSer,
  updateUser,
  deleteUser,
} from "../controller/apiController.mjs";

const router = express.Router();

router.get("/users", getAllUser);

// create new user
router.post("/create-user", createNewUSer);
// update user
router.put("/update-user", updateUser);
// delete user
router.delete("/delete-user/:userID", deleteUser);

export default router;
