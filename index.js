// PRELOADING
import "dotenv/config";
import ejs from "ejs";
import express from "express";
const app = express();

// CONSTANTS
const port = process.env.SERVER_PORT;

// MIDDLEWARES
app.set("view engine", "ejs");

// ROUTES
let titles = [
  "123",
  "456",
  "789"
]
app.get("/", (req, res) => {
  res.render("index", {titles: titles}); // Automatically sets the "views" folder as home folder for some reason. Might be better to use dirname?
})

// SERVER
const appName = "Project 茶花 || Camellia Article Writer";
const version = "version 0.0.1";
app.listen(port, (error) => {
  if(error){
    console.error(error);
  } else {
    console.log(appName + " " + version);
    console.log("Listening! @ port " + port);
  }
});