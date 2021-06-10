"use strict";
import express from "express";
import logger from "morgan";
import session from "express-session";
import rootRouter from "./router/rootRouter";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";
import { localsmiddleware } from "./middlewares";

const app = express();

const privateMiddle = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  next();
};

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(privateMiddle);
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(localsmiddleware);
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
