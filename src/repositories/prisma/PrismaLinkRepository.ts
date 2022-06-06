import { prisma } from "../../configs/database";
import Link from "../Links";
import ILinksRepo from "../LinksRepo";

export class PrismaLinksRepo implements ILinksRepo {
  getLinkById = async (id: string): Promise<Link | null> => {
    try {
      const dbQuery = await prisma.link.findFirst({
        where: {
          id,
        },
      });

      return dbQuery;
    } catch (e) {
      throw new Error("cant find url");
    }
  };

  getLinkByOrigUrl = async (origUrl: string): Promise<Link | null> => {
    try {
      const dbQuery = await prisma.link.findFirst({
        where: {
          origUrl,
        },
      });

      return dbQuery;
    } catch (e) {
      throw new Error("cant find url");
    }
  };

  getAllLinks = async (): Promise<Link[]> => {
    try {
      const dbQuery = await prisma.link.findMany();

      return dbQuery;
    } catch (e) {
      throw new Error("cant find any url");
    }
  };

  newLink = async (
    origUrl: string,
    shortUrl: string,
    id: string
  ): Promise<Link> => {
    try {
      const dbQuery = await prisma.link.create({
        data: {
          origUrl,
          shortUrl,
          id,
        },
      });

      return dbQuery;
    } catch (error) {
      throw new Error("cant create url");
    }
  };
}
