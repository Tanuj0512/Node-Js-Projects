const express = require("express");
const errorHandler = require("./middleware/errorHandler");
// Import the Express module
const dotenv = require("dotenv").config();

const app = express();
// Create an instance of an Express application

const connectDb = require("./config/dbConnections");

const port = process.env.PORT || 5000;
// Define the port number to listen on
connectDb();

app.use("/api/contacts", require("./routs/contactRouts"));
//url and routh path


app.use(express.json());
//middleware parse 

app.listen(port, () => {
  // Start the server and listen on the specified port
  console.log(`server running on ${port}`);
});


app.use(errorHandler);
