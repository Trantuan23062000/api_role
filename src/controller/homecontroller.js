import userSevirce from "../services/userSevirce"


const HandleHello = (req, res) => {
  return res.render("home.ejs");
};

const UserPage = (req, res) => {
  return res.render("user.ejs");
};

const HadlecreateUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  // userSevirce.CreateUser(email,password,username)
  userSevirce.GetUserList()
  
  // //let check = bcrypt.compareSync(password,hasPassword)
  // console.log(">>>>",hasPassword);
  // console.log(">>",check);
 
  return res.send("create user");
};

module.exports = {
  HadlecreateUser , UserPage,HandleHello
}


