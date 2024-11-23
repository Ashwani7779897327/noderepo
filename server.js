const express = require("express");
const dotenv = require('dotenv');

// Import Logger files
const logger = require('./logger/logger')

// import router file
const bootcamp = require("./router/bootcamps")

//Load env vars;
dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 5002;

const app = express();



app.use(logger);

app.use("/api/v1/bootcamps",bootcamp);

app.listen(PORT, (err) => {
  if (err) {
     console.error(`Error occurred while starting the server: ${err}`);
  } else 
  {
    console.log(`Server connected in ${process.env.NODE_ENV} mode on port ${PORT}`);
  }
});









