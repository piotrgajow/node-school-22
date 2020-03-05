import { Post, Posts } from '../types';
import { BlogPost } from '../post/index';
import { BlogMenuItem, PostSelectedEvent } from '../menu-item/index';
import { BlogPostComments } from '../post-comments/index';
import { template } from './template';
import { style } from './style';
import { ID_COMMENTS, ID_IMAGE, ID_MENU, ID_POST } from './constants';
import { BlogCommentEditor, CommentAddedEvent } from '../comment-editor/index';

export class BlogApp extends HTMLElement {

    public static TAG = "blog-app";

    public set posts(posts: Posts) {
        this._posts = posts;
        this.setSelectedPost(this._posts[0]);
        this.renderMenu();
    }

    private readonly _postElement: BlogPost;
    private readonly _imageElement: HTMLImageElement;
    private readonly _menuContainerElement: HTMLElement;
    private readonly _commentsElement: BlogPostComments;
    private readonly _onCommentAdded: (event: Event) => void;

    private _posts: Posts = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = `<style>${style}</style>${template}`;
        this._postElement = this.shadowRoot!.getElementById(ID_POST) as BlogPost;
        this._imageElement = this.shadowRoot!.getElementById(ID_IMAGE) as HTMLImageElement;
        this._menuContainerElement = this.shadowRoot!.getElementById(ID_MENU) as HTMLElement;
        this._commentsElement = this.shadowRoot!.getElementById(ID_COMMENTS) as BlogPostComments;
        this._onCommentAdded = this.saveComment.bind(this);
    }

    public connectedCallback(): void {
        this._commentsElement.addEventListener(BlogCommentEditor.EVENT_COMMENT_ADDED, this._onCommentAdded);
    }

    public disconnectedCallback(): void {
        this._commentsElement.removeEventListener(BlogCommentEditor.EVENT_COMMENT_ADDED, this._onCommentAdded);
    }

    private setSelectedPost(post: Post): void {
        this._imageElement.src = post.image;
        this._postElement.title = post.title;
        this._postElement.author = post.author;
        this._postElement.date = post.date;
        this._postElement.innerHTML = post.content;
        this._commentsElement.comments = post.comments;
        this._commentsElement.postId = post.id;
        this._imageElement.scrollIntoView({ behavior: "smooth" });
    }

    private renderMenu(): void {
        this._menuContainerElement.innerHTML = "";
        this._posts.forEach((post) => {
            const menuItem = document.createElement(BlogMenuItem.TAG) as BlogMenuItem;
            menuItem.post = post;
            menuItem.addEventListener(BlogMenuItem.EVENT_POST_SELECTED, (event) => this.setSelectedPost((event as PostSelectedEvent).post));
            this._menuContainerElement.appendChild(menuItem);
        })
    }

    private saveComment(event: Event): void {
        const comment = (event as CommentAddedEvent).comment;
        const post = this._posts.find((it) => it.id === comment.postId);
        post?.comments?.push(comment);
    }

}

customElements.define(BlogApp.TAG, BlogApp);
