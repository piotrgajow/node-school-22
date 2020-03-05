import { style } from './style';
import { template } from './template';
import { Post } from '../types';
import { PostSelectedEvent } from './PostSelectedEvent';
import { ID_AUTHOR, ID_DATE, ID_TITLE, ID_WRAPPER } from './constants';

export class BlogMenuItem extends HTMLElement {

    public static TAG = "blog-menu-item";

    public static EVENT_POST_SELECTED = "post-selected";

    public set post(post: Post) {
        this._post = post;
        this.authorElement.innerText = post.author;
        this.dateElement.innerText = post.date;
        this.titleElement.innerText = post.title;
    }

    private readonly wrapperElement: HTMLElement;
    private readonly titleElement: HTMLElement;
    private readonly authorElement: HTMLElement;
    private readonly dateElement: HTMLElement;
    private readonly onWrapperClick: () => void;

    private _post?: Post;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = `<style>${style}</style>${template}`;
        this.wrapperElement = this.shadowRoot!.getElementById(ID_WRAPPER)!;
        this.titleElement = this.shadowRoot!.getElementById(ID_TITLE)!;
        this.authorElement = this.shadowRoot!.getElementById(ID_AUTHOR)!;
        this.dateElement = this.shadowRoot!.getElementById(ID_DATE)!;
        this.onWrapperClick = this.dispatchPostSelected.bind(this);
    }

    public connectedCallback(): void {
        this.wrapperElement.addEventListener("click", this.onWrapperClick);
    }

    public disconnectedCallback(): void {
        this.wrapperElement.removeEventListener("click", this.onWrapperClick);
    }

    private dispatchPostSelected(): void {
        this.dispatchEvent(new PostSelectedEvent(this._post!));
    }

}

customElements.define(BlogMenuItem.TAG, BlogMenuItem);
