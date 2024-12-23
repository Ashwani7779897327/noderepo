const customErrorHandlear = (err, req, res, next) => {
  console.log(err);

  res.status(err.statusCode || 500).json({
    sucess: false,
    error: err.message,
  });
};
module.exports = customErrorHandlear;
