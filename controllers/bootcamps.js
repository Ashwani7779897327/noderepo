
// @desc     Get all Bootcamps
// @route    GET /api/v1/bootcamps
// @access   Public
exports.getAllbootcamps = (req, res, next) => {
    res.status(200).json({ sucess: true, msg: 'Show all bootcamps' })
}

// @desc     Create new Bootcamps
// @route    POST /api/v1/bootcamps
// @access   Public
exports.CreateNewBootcamp = (req, res, next) => {
    res.status(200).json({ sucess: true, msg: 'Create new bootcamps' })
}

// @desc     Update Bootcamps by ID
// @route    PUT /api/v1/bootcamps:id
// @access   Public
exports.updateBootcampByID = (req, res, next) => {
    res.status(200).json({ sucess: true, msg: `Updated bootcamps with ${req.params.id}` })
}

// @desc     Delete Bootcamps by ID
// @route    Delete /api/v1/bootcamps:id
// @access   Public
exports.DeleteBootcampByID = (req, res, next) => {
    res.status(200).json({ sucess: true, msg: `Delete bootcamps with ${req.params.id}` })
}

// @desc     GET Bootcamps by ID
// @route    GET /api/v1/bootcamps:id
// @access   Public
exports.getBootcampByID = (req, res, next) => {
    res.status(200).json({ sucess: true, msg: `Fetch bootcamps with ${req.params.id}` })
}