import { Comment } from "../types";
import { BlogComment } from '../comment/index';
import { CLASS_HIDDEN, ID_COMMENT_WRAPPER, ID_EDITOR, ID_EMPTY } from './constants';
import { template } from './template';
import { style } from './style';
import { BlogCommentEditor, CommentAddedEvent } from '../comment-editor/index';

export class BlogPostComments extends HTMLElement {

    public static TAG = "blog-post-comments";

    public set postId(postId: string) {
        this._commentEditor.postId = postId;
    }

    public set comments(comments: Comment[]) {
        this._comments = comments;
        this.renderComments();
    }

    private readonly _noCommentsElement: HTMLElement;
    private readonly _commentWrapperElement: HTMLElement;
    private readonly _commentEditor: BlogCommentEditor;
    private readonly _onCommentAdded: (event: Event) => void;

    private _comments: Comment[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = `<style>${style}</style>${template}`;
        this._noCommentsElement = this.shadowRoot!.getElementById(ID_EMPTY) as HTMLElement;
        this._commentWrapperElement = this.shadowRoot!.getElementById(ID_COMMENT_WRAPPER) as HTMLElement;
        this._commentEditor = this.shadowRoot!.getElementById(ID_EDITOR) as BlogCommentEditor;
        this._onCommentAdded = this.renderNewComment.bind(this);
    }

    public connectedCallback(): void {
        this._commentEditor.addEventListener(BlogCommentEditor.EVENT_COMMENT_ADDED, this._onCommentAdded);
    }

    public disconnectedCallback(): void {
        this._commentEditor.removeEventListener(BlogCommentEditor.EVENT_COMMENT_ADDED, this._onCommentAdded);
    }

    private renderComments(): void {
        this._noCommentsElement.classList.toggle(CLASS_HIDDEN, this._comments.length !== 0);
        this._commentWrapperElement.innerHTML = "";
        this._comments.forEach((comment) => {
            this.appendComment(comment);
        });
    }

    private renderNewComment(event: Event): void {
        this._noCommentsElement.classList.add(CLASS_HIDDEN);
        const newComment = (event as CommentAddedEvent).comment;
        this.appendComment(newComment);

    }

    private appendComment(comment: Comment): void {
        const commentElement = document.createElement(BlogComment.TAG) as BlogComment;
        commentElement.author = comment.author;
        commentElement.timestamp = comment.timestamp;
        commentElement.content = comment.content;
        this._commentWrapperElement.appendChild(commentElement);
    }

}

customElements.define(BlogPostComments.TAG, BlogPostComments);
