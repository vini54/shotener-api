import { Request, Response } from "express";
import Link from "../repositories/Links";
import ILinksRepo from "../repositories/LinksRepo";
import { PrismaLinksRepo } from "../repositories/prisma/PrismaLinkRepository";
import { LinkService } from "../services/LinkService";

export class LinksController {
  private LinkRepo: ILinksRepo = new PrismaLinksRepo();
  private LinkService: LinkService = new LinkService(this.LinkRepo);

  public generateUrl = async (req: Request, res: Response) => {
    const { originUrl } = req.body;

    this.LinkService.generateLink(originUrl)
      .then((link) => {
        res.status(200).json(link);
      })
      .catch((e) =>
        res.status(400).json({ message: e.message || "internal server error" })
      );
  };

  public getUrl = async (req: Request, res: Response) => {
    const { urlId } = req.params;

    this.LinkService.getLink(urlId).then((link) => {
      if (link) {
        return res.redirect(link.origUrl);
      } else {
        return res.status(404).json("Not Found 😢");
      }
    });
  };
}
