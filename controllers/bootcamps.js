const path = require("path");
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
    new ErrorResponse(`No Bootcamp found with this id${req.params.id}`, 404);
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
      new ErrorResponse(`No Bootcamp found with this id${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: bootcamp });
});

// @desc     Photo upload
// @route    PUT /api/v1/bootcamps/:id/photo
// @access   Private
exports.UploadPhoto = asyncHandler(async (req, res, next) => {
  const bootcamp = await bootcampmodel.findById(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`No Bootcamp found with this id${req.params.id}`, 404)
    );
  }
  if (!req.files) {
    return next(new ErrorResponse(`Plesase upload a Photo`, 400));
  }
  console.log(req.files.file);
  const file = req.files.file;
  // check for file type is image
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Plesase upload a image flie`, 400));
  }
  // check the file length
  if (!file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Plesase upload a Photo with size ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    );
  }
  // create a custom name
  file.name = `photo_${bootcamp._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`File upload failed`, 500));
    }

    // Update bootcamp with the photo path
    await bootcampmodel.findByIdAndUpdate(req.params.id, { photo: file.name });

    res.status(200).json({
      success: true,
      data: file.name,
    });
  });
});
