import bcrypt from "bcryptjs";
// Get the client
import mysql from "mysql2/promise";
import bluebird from "bluebird"

// Create the connection to database

const salt = bcrypt.genSaltSync(10);

const HashUserPassword = (password) => {
  let hasPassword = bcrypt.hashSync(password, salt);
  return hasPassword;
};

const CreateUser = async (email, password, username) => {
  let hasPass = HashUserPassword(password);
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'demos',
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute("INSERT INTO USER(EMAIL,PASSWORD,USERNAME) VALUES(?,?,?)",[email,hasPass,username]);
    return rows
  } catch (error) {
    console.log(error);
  }
};

const GetUserList = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'demos',
    Promise: bluebird,
  });
  let users = [];

  try {
    const [rows, fields] = await connection.execute("SELECT * FROM USER");
    return rows
  } catch (error) {
    console.log(error);
  }

};

const DeleteUsers = async (id) =>{
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'demos',
    Promise: bluebird,
  });
  let users = [];

  try {
    const [rows, fields] = await connection.execute("DELETE FROM USER WHERE ID = ?",[id]);
    return rows
  } catch (error) {
    console.log(error);
  }
}

module.exports = { CreateUser, GetUserList , DeleteUsers };
