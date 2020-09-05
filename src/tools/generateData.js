const fs = require("fs");
const Path = require("path");

const repos = require(Path.resolve(__dirname, "repos.json"));

const projects = repos
  .map((repo) => {
    const { name, html_url, description, stargazers_count, language } = repo;
    return { name, html_url, description, stargazers_count, language };
  })
  .sort((a, b) => a.stargazers_count > b.stargazers_count)
  .reverse();

fs.writeFileSync(
  Path.resolve(__dirname, "../", "data", "projects.json"),
  JSON.stringify(projects, null, 2)
);
