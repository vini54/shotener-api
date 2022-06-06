import ILinksRepo from "../repositories/LinksRepo";
import { PrismaLinksRepo } from "../repositories/prisma/PrismaLinkRepository";
import shortid from "shortid";
import "dotenv/config";

export class LinkService {
  private repository: ILinksRepo;

  constructor(repository: ILinksRepo) {
    this.repository = repository;
  }

  generateLink = async (origUrl: string) => {
    const base = process.env.BASE_DOMAIN;

    try {
      const url = await this.repository.getLinkByOrigUrl(origUrl);

      if (url) {
        return url;
      } else {
        const urlId = shortid.generate();
        const shortUrl = `${base}/${urlId}`;

        const newUrl = await this.repository.newLink(origUrl, shortUrl, urlId);

        return newUrl;
      }
    } catch (e) {
      console.log(e);
      throw new Error("internal server error");
    }
  };

  getLink = async (urlId: string) => {
    try {
      const url = await this.repository.getLinkById(urlId);

      return url;
    } catch (e) {
      console.log(e);
      throw new Error("internal server error");
    }
  };
}
