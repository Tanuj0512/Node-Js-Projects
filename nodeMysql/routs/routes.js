const express = require("express");
const {getStudents, getStudentsId} = require("../controllers/studentController");

//router object
const router = express.Router();

//get all students ist
router.get("/getall", getStudents);

//get students by id
router.get("/get/:id",getStudentsId);

module.exports = router;