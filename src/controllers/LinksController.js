"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksController = void 0;
const PrismaLinkRepository_1 = require("../repositories/prisma/PrismaLinkRepository");
const LinkService_1 = require("../services/LinkService");
class LinksController {
    constructor() {
        this.LinkRepo = new PrismaLinkRepository_1.PrismaLinksRepo();
        this.LinkService = new LinkService_1.LinkService(this.LinkRepo);
        this.generateUrl = async (req, res) => {
            const { originUrl } = req.body;
            this.LinkService.generateLink(originUrl)
                .then((link) => {
                res.status(200).json(link);
            })
                .catch((e) => res.status(400).json({ message: e.message || "internal server error" }));
        };
        this.getUrl = async (req, res) => {
            const { urlId } = req.params;
            this.LinkService.getLink(urlId).then((link) => {
                if (link) {
                    return res.redirect(link.origUrl);
                }
                else {
                    return res.status(404).json("Not Found 😢");
                }
            });
        };
    }
}
exports.LinksController = LinksController;
