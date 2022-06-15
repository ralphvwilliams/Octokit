import { Octokit, App } from "https://cdn.skypack.dev/octokit";
const pfp = document.getElementById("pfp");
const userName = document.getElementById("userName");
const submitBtn = document.getElementById("submitBtn");
let warning = document.getElementById("error");
// const { Octokit } = require("octokit");

const octokit = new Octokit();

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  octokit.rest.users
    .getByUsername({
      username: userName.value,
    })
    .then((data) => {
      warning.innerText = "";
      pfp.setAttribute("src", data.data.avatar_url);
    })
    .catch((err) => {
      console.log(err);
      warning.innerText = "This username does not exist";
      pfp.setAttribute("src", "./notFound.gif");
    });
});
