//When a GET request is made to the URL /api/contacts, the server responds with a status
//code of 200 and a JSON object containing a single key-value pair: { message: "Get alkl" }.

const errorHandler = require("../middleware/errorHandler");
const { asyncHandler } = require("express-async-handler");

const getContact =async (req, res) => {
  res.status(200).json({ message: "get all contacts" });
};

const createContact = async (req, res) => {
  console.log("the req body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all fields require");
  }
  res.status(201).json({ message: "create contact" });
};

const getSingleContact = async (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
};

const updateContact = async (req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
};
const deleteContact = async (req, res) => {
  res.status(201).json({ message: `delete contact for ${req.params.id}` });
};

module.exports = {
  getContact,
  createContact,
  getSingleContact,
  updateContact,
  deleteContact,
};
