// PRELOADING
import "dotenv/config";
import "ejs";
import express from "express";
const app = express();

// CONSTANTS
const appName = process.env.APP_NAME;
const version = process.env.APP_VERSION;
const port = process.env.SERVER_PORT;

// MIDDLEWARES
app.set("view engine", "ejs");

// ROUTES
let titles = [ // Data will come from cache which comes from database.
  "Ang Adventures ni Mang Juan",
  "The Pug",
  "Natanso sa Mobile Legends"
];

app.get("/", (req, res) => {
  res.render("index", {
    titles:     titles,
    ejsTitle:   appName,
    ejsVersion: version
  }); // Automatically sets the "views" folder as home folder for some reason. Might be better to use dirname?
});

// SERVER
app.listen(port, (error) => {
  if(error){
    console.error(error);
  } else {
    console.log(appName + " " + version);
    console.log("Listening! @ port " + port);
  }
});