import { Post } from '../types';
import { BlogMenuItem } from './BlogMenuItem';

export class PostSelectedEvent extends CustomEvent<Post> {

    public get post() {
        return this.detail;
    }

    constructor(post: Post) {
        super(BlogMenuItem.EVENT_POST_SELECTED, { detail: post });
    }

}
