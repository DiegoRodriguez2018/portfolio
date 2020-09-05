/**
 * Script to generate data based on public github repos
 */

require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const Path = require("path");

const token = process.env.GITHUB_TOKEN;
const url = "https://api.github.com/users/DiegoRodriguez2018/repos";

axios
  .get(url, {
    headers: {
      username: "DiegoRodriguez2018",
      Authorization: `token ${token}`,
    },
  })
  .then((res) => {
    const path = Path.resolve(__dirname, "repos.json");
    fs.writeFileSync(path, JSON.stringify(res.data, null, 2));
  })
  .catch((e) => {
    console.log(e.message);
  });
