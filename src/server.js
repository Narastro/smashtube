import express from "express";

const app = express();

const PORT = 4000;

const goMiddleware = (req, res, next) => {
  console.log(`Someone is going to : ${req.url}`);
  next();
};

const handleHome = (req, res) => res.send("Good!");

app.get("/", goMiddleware, handleHome);

const handleListening = () =>
  console.log(`✅Server Listening on : http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);
