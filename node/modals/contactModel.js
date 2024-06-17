const mongoos = require("mongoose");

const contactSchema = mongoose.schema(
  {
    name: {
      type: String,
      required: [true, "Please add contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add contact email"],
    },
    phone: {
      type: String,
      required: [true, "Please add contact mobile"],
    },
  },
  {
    timesstamps: true,
  }
);

module.exports = mongoose.model("contact", contactSchema);
