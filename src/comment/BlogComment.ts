import { template } from './template';
import { style } from './style';
import { ATTRIBUTE_AUTHOR, ATTRIBUTE_TIMESTAMPT, ID_AUTHOR, ID_CONTENT, ID_TIMESTAMP } from './constants';

export class BlogComment extends HTMLElement {

    public static TAG = "blog-comment";
    public static observedAttributes = [ATTRIBUTE_AUTHOR, ATTRIBUTE_TIMESTAMPT];

    public set author(author: string) {
        this._authorElement.innerText = author;
        this.setAttribute(ATTRIBUTE_AUTHOR, author);
    }

    public set timestamp(timestamp: string) {
        this._timestampElement.innerText = timestamp;
        this.setAttribute(ATTRIBUTE_TIMESTAMPT, timestamp);
    }

    public set content(content: string) {
        this._contentElement.innerText = content;
    }

    private readonly _authorElement: HTMLElement;
    private readonly _timestampElement: HTMLElement;
    private readonly _contentElement: HTMLElement;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = `<style>${style}</style>${template}`;
        this._authorElement = this.shadowRoot!.getElementById(ID_AUTHOR) as HTMLElement;
        this._timestampElement = this.shadowRoot!.getElementById(ID_TIMESTAMP) as HTMLElement;
        this._contentElement = this.shadowRoot!.getElementById(ID_CONTENT) as HTMLElement;
    }

    public attributeChangedCallback(name: keyof this, oldValue: any, newValue: any): void {
        if (oldValue !== newValue) {
            this[name] = newValue;
        }
    }

}

customElements.define(BlogComment.TAG, BlogComment);
