import express from "express";
import { LinksController } from "./controllers/LinksController";

const Router = express.Router();

const linksController = new LinksController();

Router.post("/short", linksController.generateUrl);

Router.get("/:urlId", linksController.getUrl);

export { Router };
