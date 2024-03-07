import bcrypt from "bcryptjs";
// Get the client
import mysql from "mysql2";

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "demos",
});
const salt = bcrypt.genSaltSync(10);

const HashUserPassword = (password) => {
  let hasPassword = bcrypt.hashSync(password, salt);
  return hasPassword;
};

const CreateUser = (email, password, username) => {
  let hasPass = HashUserPassword(password);
  connection.query(
    "INSERT INTO user(email,password,username) VALUES (?,?,?)",
    [email, hasPass, username],
    function (err, results, fields) {
      if (err) {
        console.log(err);
      }
    }
  );
};

const GetUserList = () => {
  let users = []
  connection.query("SELECT * FROM user",
    function (err, results, fields) {
      if (err) {
        console.log(err);
      }
      console.log(results);
    }
  )
    
}

module.exports = { CreateUser, GetUserList };
