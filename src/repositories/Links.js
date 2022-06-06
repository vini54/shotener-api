"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Link {
    constructor(props) {
        this.id = props.id;
        this.origUrl = props.origUrl;
        this.shortUrl = props.shortUrl;
        this.createdAt = props.createdAt;
    }
}
exports.default = Link;
