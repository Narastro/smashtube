import express from "express";
import { trending, watch, edit } from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get("/", trending);
videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit);

export default videoRouter;
