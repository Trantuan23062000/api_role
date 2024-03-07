import express from "express";
import initWedRoutes from "./routes/wed";
import viewEngineer from "./configs/viewEnginer";
import bodyParser from "body-parser"
require("dotenv").config()
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


viewEngineer(app);
initWedRoutes(app);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log("Server running:" + PORT);
});
