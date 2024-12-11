const bootcampmodel = require('../models/Bootcamps');


// @desc     Get all Bootcamps
// @route    GET /api/v1/bootcamps
// @access   Public
exports.getAllbootcamps = async (req, res, next) => {

    try {
        const bootcamp = await bootcampmodel.find({})
        res.status(200).json({success:true,data:bootcamp})
    } catch (error) {
        res.status(400).json({success:false,error:error.message});    
    }
   



}

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
exports.getBootcampByID = async (req, res, next) => {
    try {
        const bootcamp = await bootcampmodel.findById(req.params.id)
        if(!bootcamp)
        {
            return res.status(400).json({success:false,data:'no id found'})
        }
        res.status(200).json({success:true,data:bootcamp})

    } catch (error) {
        return res.status(400).json({success:false,error:error.message})

    }
}