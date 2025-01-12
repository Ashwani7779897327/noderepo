const express = require("express");
const router = express.Router();

const {
  getAllbootcamps,
  getBootcampByID,
  updateBootcampByID,
  CreateNewBootcamp,
  DeleteBootcampByID,
  UploadPhoto,
} = require("../controllers/bootcamps");

router.route("/").get(getAllbootcamps).post(CreateNewBootcamp);

router
  .route("/:id")
  .get(getBootcampByID)
  .put(updateBootcampByID)
  .delete(DeleteBootcampByID);

router.route("/:id/photo").put(UploadPhoto);

module.exports = router;
