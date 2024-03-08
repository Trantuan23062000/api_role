import userSevirce from "../services/userSevirce";

const HandleHello = (req, res) => {
  return res.render("home.ejs");
};

const UserPage = async (req, res) => {
  let listUser = await userSevirce.GetUserList();
  //console.log(listUser);
  return res.render("user.ejs", { listUser });
};

const HadlecreateUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  userSevirce.CreateUser(email, password, username);
  // //let check = bcrypt.compareSync(password,hasPassword)
  // console.log(">>>>",hasPassword);
  // console.log(">>",check);

  return res.redirect("/user");
};

const HadleDeleteUser = async (req, res) => {
  await userSevirce.DeleteUsers(req.params.id)
  return res.redirect(
      "/user"
  )
};

module.exports = {
  HadlecreateUser,
  UserPage,
  HandleHello,
  HadleDeleteUser,
};
