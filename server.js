const express = require("express");
const dotenv = require('dotenv');
// Import Logger files
const logger = require('./logger/logger')
// import router file
const bootcamp = require("./router/bootcamps")
const connectDB = require('./config/db')


//Load env vars;
dotenv.config({ path: './config/config.env' });

connectDB();
const PORT = process.env.PORT || 5002;
const app = express();


// Middleware to parse JSON request body
app.use(express.json());
app.use(logger);


app.use("/api/v1/bootcamps",bootcamp);

const server = 
app.listen(PORT,
  console.log(`Server connected in ${process.env.NODE_ENV} mode on port ${PORT}`)
);


process.on('unhandledRejection',(err,promise) =>{
 console.log(`Error : ${err.message}`);
 server.close(() => process.exit(1));

})









