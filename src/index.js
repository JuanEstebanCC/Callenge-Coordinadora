// Import modules
const express = require("express");
const morgan = require("morgan");
const app = express();

// Use the imported modules and set to allow json files
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import the endpoints

const exercises = require("./routes/exercises");

app.use("/challenge", exercises);

// Create the server and set the port 5300 or the port on the .env file
app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`Server listen on port ${app.get("port")}`);
});
