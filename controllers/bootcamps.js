const bootcampmodel = require("../models/Bootcamps");
const ErrorResponse = require("../utils/ErrorResponse");
const asyncHandler = require("../middleware/asycwaitmiddleware");

// @desc     Get all Bootcamps
// @route    GET /api/v1/bootcamps
// @access   Public
exports.getAllbootcamps = asyncHandler(async (req, res, next) => {
  const bootcamp = await bootcampmodel.find({});
  res
    .status(200)
    .json({ success: true, count: bootcamp.length, data: bootcamp });
});

// @desc     Create new Bootcamps
// @route    POST /api/v1/bootcamps
// @access   Public
exports.CreateNewBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await bootcampmodel.create(req.body);
  res.status(201).json({
    success: true,
    data: bootcamp,
  });
});

// @desc     Update Bootcamps by ID
// @route    PUT /api/v1/bootcamps:id
// @access   Public
exports.updateBootcampByID = asyncHandler(async (req, res, next) => {
  const bootcamp = await bootcampmodel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!bootcamp) {
    new ErrorResponse(`No000 Bootcamp found with this id${req.params.id}`, 404);
  }
  res.status(200).json({ success: true, data: bootcamp });
});

// @desc     Delete Bootcamps by ID
// @route    Delete /api/v1/bootcamps:id
// @access   Public
exports.DeleteBootcampByID = asyncHandler(async (req, res, next) => {
  const bootcamp = await bootcampmodel.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    new ErrorResponse(`No000 Bootcamp found with this id${req.params.id}`, 404);
  }
  res.status(200).json({ success: true, data: { id: "deleted sucessfully" } });
});

// @desc     GET Bootcamps by ID
// @route    GET /api/v1/bootcamps:id
// @access   Public
exports.getBootcampByID = asyncHandler(async (req, res, next) => {
  const bootcamp = await bootcampmodel.findById(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(
        `No000 Bootcamp found with this id${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({ success: true, data: bootcamp });
});
