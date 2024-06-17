const express = require("express");
const router = express.Router();
const {
  getContact,
  createContact,
  getSingleContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactControllers");

router.route("/").get(getContact).post(createContact);

router
  .route("/:id")
  .get(getSingleContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
