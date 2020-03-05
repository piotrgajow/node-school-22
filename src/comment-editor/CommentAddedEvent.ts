import { NewComment } from '../types';

export class CommentAddedEvent extends CustomEvent<NewComment> {

    public static TYPE = "comment-added";

    public get comment() {
        return this.detail;
    }

    constructor(comment: NewComment) {
        super(CommentAddedEvent.TYPE, { detail: comment, bubbles: true, composed: true, cancelable: false });
    }

}
