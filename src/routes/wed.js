import express from "express";
import homecontroller from "../controller/homecontroller"

/**
 *
 * @param {*} app
 */
const router = express.Router();
const initWedRoutes = (app) => {
  router.get("/",homecontroller.HandleHello )

  router.get("/user",homecontroller.UserPage)

  router.post("/users/create-user",homecontroller.HadlecreateUser)

  return app.use("/", router);
};

export default initWedRoutes;
