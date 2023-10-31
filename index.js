// PRELOADING
import "dotenv/config";
import express from "express";
const app = express();

// import pug from "pug";
// app.set("views", "/views"); // might want to move these to their own controller.
// app.set("view engine", "pug");

// CONSTANTS
const port = process.env.SERVER_PORT;

const appName = "Project 茶花 || Camellia Article Writer";
const version = "version 0.0.1";
app.listen(port, (error) => {
  if(error){
    console.error(error);
  } else {
    console.log(appName + " " + version);
    console.log("Listening! @ port " + port);
  };
});