import connection from "../configs/db.mjs";

const getAllUser = async (req, res) => {
  try {
    const [results] = await connection.execute("SELECT * FROM Users ");
    res.render("home.ejs", { data: results });
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
    res.send(JSON.stringify(results));
  } catch (error) {
    console.log(error);
  }
};

const createUserPage = (req, res) => {
  res.render("create-user-page.ejs");
};

const createNewUSer = async (req, res) => {
  let { lname, fname, email, address } = req.body;
  try {
    await connection.execute(
      `insert into	Users (LastName, FirstName, Email, Address) 
       values (?, ?, ?,?)`,
      [lname, fname, email, address]
    );
    res.redirect("/");
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
    res.render("edit-user-page.ejs", { user: results[0] });
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
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.userID;
  try {
    await connection.execute(`DELETE FROM Users WHERE ID = ?;`, [userId]);
    res.redirect("/");
  } catch (error) {
    console.log(error);
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
};
