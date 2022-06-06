import Link from "./Links";

export default interface ILinksRepo {
  getLinkById: (id: string) => Promise<Link | null>;
  getLinkByOrigUrl: (origUrl: string) => Promise<Link | null>;
  getAllLinks: () => Promise<Link[]>;
  newLink: (origUrl: string, shortUrl: string, id: string) => Promise<Link>;
}
