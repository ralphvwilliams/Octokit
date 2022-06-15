import { Octokit, App } from "https://cdn.skypack.dev/octokit";
const pfp = document.getElementById("pfp");
const userName = document.getElementById("userName");
const submitBtn = document.getElementById("submitBtn");
let warning = document.getElementById("error");
let user = document.getElementById("user");
let bio = document.getElementById("bio");
let location = document.getElementById("location");
let name = document.getElementById("name");
let followers = document.getElementById("followers");
let following = document.getElementById("following");
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
      user.innerText = `Username: ${data.data.login}`;
      bio.innerText = `Bio: ${data.data.bio}`;
      location.innerText = `Location: ${data.data.location}`;
      name.innerText = `Name: ${data.data.name}`;
      followers.innerText = `Followers: ${data.data.followers}`;
      following.innerText = `Following: ${data.data.following}`;
    })
    .catch((err) => {
      console.log(err);
      warning.innerText = "This username does not exist";
      pfp.setAttribute("src", "./notFound.gif");
    });
});
