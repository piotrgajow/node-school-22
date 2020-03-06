import { style } from './style';
import { template } from './template';
import { ATTRIBUTE_AUTHOR, ATTRIBUTE_DATE, ATTRIBUTE_TITLE, ID_AUTHOR, ID_DATE, ID_TITLE } from './constants';

export class BlogPost extends HTMLElement {

    public static TAG = "blog-post";
    public static observedAttributes = [ATTRIBUTE_TITLE, ATTRIBUTE_AUTHOR, ATTRIBUTE_DATE];

    public set title(title: string) {
        this.setAttribute(ATTRIBUTE_TITLE, title);
    }

    public set author(author: string) {
        this.setAttribute(ATTRIBUTE_AUTHOR, author);
    }

    public set date(date: string) {
        this.setAttribute(ATTRIBUTE_DATE, date);
    }

    private readonly titleElement: HTMLElement;
    private readonly authorElement: HTMLElement;
    private readonly dateElement: HTMLElement;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = `<style>${style}</style>${template}`;
        this.titleElement = this.shadowRoot!.getElementById(ID_TITLE) as HTMLElement;
        this.authorElement = this.shadowRoot!.getElementById(ID_AUTHOR) as HTMLElement;
        this.dateElement = this.shadowRoot!.getElementById(ID_DATE) as HTMLElement;
    }

    public attributeChangedCallback(name: keyof this, oldValue: any, newValue: any): void {
        switch (name) {
            case ATTRIBUTE_TITLE:
                this.titleElement.innerText = newValue;
                break;
            case ATTRIBUTE_DATE:
                this.dateElement.innerText = newValue;
                break;
            case ATTRIBUTE_AUTHOR:
                this.authorElement.innerText = newValue;
                break;
        }
    }

}

customElements.define(BlogPost.TAG, BlogPost);
