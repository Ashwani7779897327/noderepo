const ErrorResponse = require("../utils/ErrorResponse");

const customErrorHandlear = (err, req, res, next) => {
  // console.log(err);

  let error = { ...err };
  error.message = err.message;
  console.log(`ErrorName=>${err.name}`);

  if (err.name === "CastError") {
    const message = `No Bootcamp found with this id${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  res.status(error.statusCode || 500).json({
    sucess: false,
    error: error.message,
  });
};
module.exports = customErrorHandlear;
