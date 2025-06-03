import express from "express";
import {
  getAllUser,
  getUserDetail,
  createUserPage,
  createNewUSer,
  getEditUserPage,
  editUser,
  deleteUser,
  uploadFilePage,
  handleUploadFile,
} from "../controller/homeController.mjs";
import multer from "multer";
import path from "path";
import appRoot from "app-root-path";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, appRoot + "/src/public/images/");
  },

  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = "Only image files are allowed!";
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });

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

//upload file
router.get("/upload", uploadFilePage);
router.post("/upload-avt", upload.single("avt-file"), handleUploadFile);

export default router;
