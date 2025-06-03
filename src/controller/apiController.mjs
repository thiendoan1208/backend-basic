import connection from "../configs/db.mjs";

const getAllUser = async (req, res) => {
  try {
    const [results] = await connection.execute("SELECT * FROM Users ");
    return res.status(200).json({
      message: "user list",
      data: results,
    });
  } catch (err) {
    console.log(err);
  }
};

// create new user
const createNewUSer = async (req, res) => {
  let { lname, fname, email, address } = req.body;
  try {
    if (!lname || !fname || !email || !address) {
      return res.status(200).json({
        message: "Missing required parameter",
      });
    } else {
      await connection.execute(
        `insert into	Users (LastName, FirstName, Email, Address)
       values (?, ?, ?,?)`,
        [lname, fname, email, address]
      );

      return res.status(200).json({
        message: "ok",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// Update user
const updateUser = async (req, res) => {
  let { ID, lname, fname, email, address } = req.body;
  try {
    if (!lname || !fname || !email || !address || !ID) {
      return res.status(200).json({
        message: "Missing required parameter",
      });
    } else {
      await connection.execute(
        `UPDATE Users
         SET LastName = ?, FirstName = ?, Email = ?, Address = ?
         WHERE ID = ?;`,
        [lname, fname, email, address, ID]
      );
      return res.status(200).json({
        message: "ok",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// Delete user
const deleteUser = async (req, res) => {
  const userId = req.params.userID;
  try {
    if (userId) {
      await connection.execute(`DELETE FROM Users WHERE ID = ?;`, [userId]);
      return res.status(200).json({
        message: "ok",
      });
    } else {
      return res.status(200).json({
        message: "Missing required parameter",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export { getAllUser, createNewUSer, updateUser, deleteUser };
