const express = require("express");
const dotenv = require('dotenv');

//Load env vars;

dotenv.config({ path: './config/config.env'});

const PORT = process.env.PORT || 5002;

const app = express();

app.listen(PORT,(err) => {
    if (err) {
      console.error(`Error occurred while starting the server: ${err}`);
    } else {
      console.log(`Server connected in ${process.env.NODE_ENV} mode on port ${PORT}`);
    }
  });
