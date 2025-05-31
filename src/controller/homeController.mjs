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

export { getAllUser, getUserDetail };
