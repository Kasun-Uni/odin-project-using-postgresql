async function getUsernames(req, res) {
  console.log("usernames will be logged here - wip");
  res.send("Check your terminal for the usernames.");
}

async function createUsernameGet(req, res) {
  res.render("new");
}

async function createUsernamePost(req, res) {
  console.log("username to be saved: ", req.body.username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
};
