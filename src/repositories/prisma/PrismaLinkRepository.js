"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaLinksRepo = void 0;
const database_1 = require("../../configs/database");
class PrismaLinksRepo {
    constructor() {
        this.getLinkById = async (id) => {
            try {
                const dbQuery = await database_1.prisma.link.findFirst({
                    where: {
                        id,
                    },
                });
                return dbQuery;
            }
            catch (e) {
                throw new Error("cant find url");
            }
        };
        this.getLinkByOrigUrl = async (origUrl) => {
            try {
                const dbQuery = await database_1.prisma.link.findFirst({
                    where: {
                        origUrl,
                    },
                });
                return dbQuery;
            }
            catch (e) {
                throw new Error("cant find url");
            }
        };
        this.getAllLinks = async () => {
            try {
                const dbQuery = await database_1.prisma.link.findMany();
                return dbQuery;
            }
            catch (e) {
                throw new Error("cant find any url");
            }
        };
        this.newLink = async (origUrl, shortUrl, id) => {
            try {
                const dbQuery = await database_1.prisma.link.create({
                    data: {
                        origUrl,
                        shortUrl,
                        id,
                    },
                });
                return dbQuery;
            }
            catch (error) {
                throw new Error("cant create url");
            }
        };
    }
}
exports.PrismaLinksRepo = PrismaLinksRepo;
