import bcrypt from "bcryptjs";
// Get the client
import mysql from "mysql2/promise";
import bluebird from "bluebird";
import db from "../models/index"


// Create the connection to database

const salt = bcrypt.genSaltSync(10);

const HashUserPassword = (password) => {
  let hasPassword = bcrypt.hashSync(password, salt);
  return hasPassword;
};

const CreateUser = async (username, email, password) => {
  let hasPass = HashUserPassword(password);
      try {
        await db.User.create({
          username:username,
          email:email,
          password:hasPass

        })
        
      } catch (error) {
         console.log(error)
      }
};

const GetUserList = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "demos",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute("SELECT * FROM USERS");
    return rows;
  } catch (error) {
    console.log(error);
  }
};

const GetUserById = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "demos",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute(
      "SELECT * FROM USERS WHERE ID = ?",
      [id]
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
};

const UpdateUser = async (email, username , id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "demos",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute(
      "UPDATE USERS SET USERNAME = ? , EMAIL = ? WHERE ID =?",
      [username,email,id]
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
};

const DeleteUsers = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "demos",
    Promise: bluebird,
  });
  let users = [];

  try {
    const [rows, fields] = await connection.execute(
      "DELETE FROM USERS WHERE ID = ?",
      [id]
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  CreateUser,
  GetUserList,
  DeleteUsers,
  GetUserById,
  UpdateUser,
};
