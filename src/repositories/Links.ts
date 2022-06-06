interface LinksProps {
  id: string;
  origUrl: string;
  shortUrl: string;
  createdAt?: Date;
}

export default class Link {
  id: string;
  origUrl: string;
  shortUrl: string;
  createdAt?: Date;

  constructor(props: LinksProps) {
    this.id = props.id;
    this.origUrl = props.origUrl;
    this.shortUrl = props.shortUrl;
    this.createdAt = props.createdAt;
  }
}
