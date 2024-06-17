const express = require("express");

const morgan = require("morgan");
const mySqlPool = require("./config/db");

const app = express();
const port = 6969;


//routs 
app.use("/api/v1/student" , require("./routs/routes"));

app.use(express.json());
app.use(morgan("dev"));

app.get("/test", (req, res) => {
  res.status(200).send("Welsssssssssssssome");
});

//condationally listen
mySqlPool
  .query("SELECT 1")
  .then(() => {
    console.log("connected to db");
    //listen
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
