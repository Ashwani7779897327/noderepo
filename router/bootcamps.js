const express = require("express")
const router = express.Router();

const {
    getAllbootcamps,
    getBootcampByID,
    updateBootcampByID,
    CreateNewBootcamp,
    DeleteBootcampByID
} = require("../controllers/bootcamps");

    router.route("/")
    .get(getAllbootcamps)
    .post(CreateNewBootcamp);

    router.route("/:id")
    .get(getBootcampByID)
    .put(updateBootcampByID)
    .delete(DeleteBootcampByID);





module.exports = router;