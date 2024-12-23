const bootcampmodel = require("../models/Bootcamps");
const ErrorResponse = require("../utils/ErrorResponse");

// @desc     Get all Bootcamps
// @route    GET /api/v1/bootcamps
// @access   Public
exports.getAllbootcamps = async (req, res, next) => {
  try {
    const bootcamp = await bootcampmodel.find({});
    res
      .status(200)
      .json({ success: true, count: bootcamp.length, data: bootcamp });
  } catch (error) {
    next(error);
    //res.status(400).json({ success: false, error: error.message });
  }
};

// @desc     Create new Bootcamps
// @route    POST /api/v1/bootcamps
// @access   Public
exports.CreateNewBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await bootcampmodel.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// @desc     Update Bootcamps by ID
// @route    PUT /api/v1/bootcamps:id
// @access   Public
exports.updateBootcampByID = async (req, res, next) => {
  try {
    const bootcamp = await bootcampmodel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    // next(error);
    res.status(400).json({ success: false });
  }
};

// @desc     Delete Bootcamps by ID
// @route    Delete /api/v1/bootcamps:id
// @access   Public
exports.DeleteBootcampByID = async (req, res, next) => {
  try {
    const bootcamp = await bootcampmodel.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res
      .status(200)
      .json({ success: true, data: { id: "deleted sucessfully" } });
  } catch (error) {
    // next(error);
    res.status(400).json({ success: false });
  }
};

// @desc     GET Bootcamps by ID
// @route    GET /api/v1/bootcamps:id
// @access   Public
exports.getBootcampByID = async (req, res, next) => {
  try {
    const bootcamp = await bootcampmodel.findById(req.params.id);
    if (!bootcamp) {
      return next(
        new ErrorResponse(`No Bootcamp found with this id${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    next(
      new ErrorResponse(`No Bootcamp found with this id${req.params.id}`, 404)
    );
    // return res.status(400).json({ success: false, error: error.message });
  }
};
