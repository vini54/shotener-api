"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
require("dotenv/config");
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(routes_1.Router);
app.get("/", (req, res) => {
    return res.status(200).json("access successful");
});
app.listen(port || 8080, () => {
    console.log(`Server running on ${port || 8080}`);
});
