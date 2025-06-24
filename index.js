const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;
const DIRECTORY = "/Users/michael1303/02_Professional/08_Jobs/04_Learning/04_Full_Stack/03_Projects/25_BasicInformationalSite";

app.get("/", (req, res) => res.sendFile(path.join(DIRECTORY, "index.html")));
app.get("/about", (req, res) => res.sendFile(path.join(DIRECTORY, "about.html")));
app.get("/contact-me", (req, res) => res.sendFile(path.join(DIRECTORY, "contact-me.html")));

app.use((req, res) => {
  res.status(404);
  res.sendFile(path.join(DIRECTORY, "404.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
