"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
const LinksController_1 = require("./controllers/LinksController");
const Router = express_1.default.Router();
exports.Router = Router;
const linksController = new LinksController_1.LinksController();
Router.post("/short", linksController.generateUrl);
Router.get("/:urlId", linksController.getUrl);
