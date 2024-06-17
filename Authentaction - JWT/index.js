import dotenv from "dotenv";
import express from "express";
const app = express();
import jwt from "jsonwebtoken";

app.use(express.json());
dotenv.config();

const users = [
  {
    userName: "Tim",
    LastName: "David",
  },
  {
    userName: "John",
    LastName: "Darel",
  },
];

app.get("/posts", authenticateUser, (req, res) => {
  res.json(posts.filter(post => post.userName === req.user.name));
});



//express middelware - to authenticate a user based on JET passed in HTTP req. header
//the authenticateUser middleware will first verify the JWT token in the Authorization header before allowing access to the /posts
function authenticateUser(req, res, nex) {
  const authHeader = req.headers["authorization"]; //reteruves authorization from  http request header
  const token = authHeader && authHeader.split("")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(3001, () => {
  console.log(`server is running on 3001`);
});
