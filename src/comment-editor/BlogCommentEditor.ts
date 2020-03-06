import { template } from './template';
import { style } from './style';
import { ATTRIBUTE_POST_ID, ID_AUTHOR, ID_BUTTON, ID_CONTENT } from './constants';
import { CommentAddedEvent } from './CommentAddedEvent';
import { NewComment } from '../types';

export class BlogCommentEditor extends HTMLElement {

    public static TAG = "blog-comment-editor";

    public static EVENT_COMMENT_ADDED = CommentAddedEvent.TYPE;

    public static observedAttributes = [ATTRIBUTE_POST_ID];

    public set postId(postId: string) {
        this.setAttribute(ATTRIBUTE_POST_ID, postId);
    }

    private readonly _contentElement: HTMLTextAreaElement;
    private readonly _authorElement: HTMLInputElement;
    private readonly _buttonElement: HTMLElement;
    private readonly _onPostCommentButtonClick: () => void;

    private _postId?: string;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = `<style>${style}</style>${template}`;
        this._contentElement = this.shadowRoot!.getElementById(ID_CONTENT) as HTMLTextAreaElement;
        this._authorElement = this.shadowRoot!.getElementById(ID_AUTHOR) as HTMLInputElement;
        this._buttonElement = this.shadowRoot!.getElementById(ID_BUTTON) as HTMLElement;
        this._onPostCommentButtonClick = this.saveComment.bind(this);
    }

    public connectedCallback(): void {
        this._buttonElement.addEventListener("click", this._onPostCommentButtonClick);
    }

    public disconnectedCallback(): void {
        this._buttonElement.removeEventListener("click", this._onPostCommentButtonClick);
    }

    public attributeChangedCallback(name: keyof this, oldValue: any, newValue: any): void {
        if (name === ATTRIBUTE_POST_ID) {
            this._postId = newValue;
        }
    }

    private saveComment(): void {
        try {
            const event = this.buildEvent();
            this.dispatchEvent(event);
            this.clear();
        } catch (e) {
            alert(e);
        }
    }

    private buildEvent(): CommentAddedEvent {
        const content = this._contentElement.value;
        if (!content) {
            throw new Error("Please enter comment text");
        }
        const author = this._authorElement.value;
        if (!author) {
            throw new Error("Please sign your comment");
        }
        const timestamp = this.getCurrentTimestamp();
        const newComment: NewComment = {
            author,
            content,
            timestamp,
            postId: this._postId!,
        };
        return new CommentAddedEvent(newComment);
    }

    private getCurrentTimestamp(): string {
        const now = new Date();
        const day = now.getDate().toString(10).padStart(2, "0");
        const month = (now.getMonth() + 1).toString(10).padStart(2, "0");
        const year = now.getFullYear();
        const hour = now.getHours().toString(10).padStart(2, "0");
        const minute = now.getMinutes().toString(10).padStart(2, "0");
        return `${day}-${month}-${year} ${hour}:${minute}`;
    }

    private clear(): void {
        this._contentElement.value = "";
        this._authorElement.value = "";
    }

}

customElements.define(BlogCommentEditor.TAG, BlogCommentEditor);
