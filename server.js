const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
// Import Logger files
const logger = require("./logger/logger");
// import router file
const bootcamp = require("./router/bootcamps");
const connectDB = require("./config/db");
const customErrorHandlear = require("./middleware/error");
// import file - image upload
const fileupload = require("express-fileupload");

//Load env vars;
dotenv.config({ path: "./config/config.env" });

connectDB();
const PORT = process.env.PORT || 5002;
const app = express();

// Middleware to parse JSON request body
app.use(express.json());
// set public as a static folder
app.use(express.static(path.join(__dirname, "public")));

// middleware for file upload
app.use(fileupload());
app.use(logger);

app.use("/api/v1/bootcamps", bootcamp);

app.use(customErrorHandlear);

const server = app.listen(
  PORT,
  console.log(
    `Server connected in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  server.close(() => process.exit(1));
});
