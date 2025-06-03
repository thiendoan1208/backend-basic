import connection from "../configs/db.mjs";
import multer from "multer";

const getAllUser = async (req, res) => {
  try {
    const [results] = await connection.execute("SELECT * FROM Users ");
    return res.render("home.ejs", { data: results });
  } catch (err) {
    console.log(err);
  }
};

const getUserDetail = async (req, res) => {
  const userId = req.params.userID;
  try {
    const [results] = await connection.execute(
      "SELECT * FROM Users WHERE ID = ? ",
      [userId]
    );
    return res.send(JSON.stringify(results));
  } catch (error) {
    console.log(error);
  }
};

const createUserPage = (req, res) => {
  return res.render("create-user-page.ejs");
};

const createNewUSer = async (req, res) => {
  let { lname, fname, email, address } = req.body;
  try {
    await connection.execute(
      `insert into	Users (LastName, FirstName, Email, Address) 
       values (?, ?, ?,?)`,
      [lname, fname, email, address]
    );
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

// edit user
const getEditUserPage = async (req, res) => {
  const userId = req.params.userID;
  try {
    const [results] = await connection.execute(
      "SELECT * FROM Users WHERE ID = ? ",
      [userId]
    );
    return res.render("edit-user-page.ejs", { user: results[0] });
  } catch (error) {
    console.log(error);
  }
};

const editUser = async (req, res) => {
  let { ID, lname, fname, email, address } = req.body;
  try {
    await connection.execute(
      `UPDATE Users
       SET LastName = ?, FirstName = ?, Email = ?, Address = ?
       WHERE ID = ?;`,
      [lname, fname, email, address, ID]
    );
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.userID;
  try {
    await connection.execute(`DELETE FROM Users WHERE ID = ?;`, [userId]);
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

// Upload file
const uploadFilePage = (req, res) => {
  return res.render("upload-file.ejs");
};

const handleUploadFile = async (req, res) => {
  try {
    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    } else if (!req.file) {
      return res.send("Please select an image to upload");
    }

    // Show uploaded image
    res.send(
      `You have uploaded this image: <hr/><img src="/images/${req.file.filename}" width="500"><hr /><a href="/upload">Upload another image</a>`
    );
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong during upload");
  }
};

export {
  getAllUser,
  getUserDetail,
  createUserPage,
  createNewUSer,
  getEditUserPage,
  editUser,
  deleteUser,
  uploadFilePage,
  handleUploadFile,
};
