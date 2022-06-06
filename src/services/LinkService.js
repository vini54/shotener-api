"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkService = void 0;
const shortid_1 = __importDefault(require("shortid"));
require("dotenv/config");
class LinkService {
    constructor(repository) {
        this.generateLink = async (origUrl) => {
            const base = process.env.BASE_DOMAIN;
            try {
                const url = await this.repository.getLinkByOrigUrl(origUrl);
                if (url) {
                    return url;
                }
                else {
                    const urlId = shortid_1.default.generate();
                    const shortUrl = `${base}/${urlId}`;
                    const newUrl = await this.repository.newLink(origUrl, shortUrl, urlId);
                    return newUrl;
                }
            }
            catch (e) {
                console.log(e);
                throw new Error("internal server error");
            }
        };
        this.getLink = async (urlId) => {
            try {
                const url = await this.repository.getLinkById(urlId);
                return url;
            }
            catch (e) {
                console.log(e);
                throw new Error("internal server error");
            }
        };
        this.repository = repository;
    }
}
exports.LinkService = LinkService;
