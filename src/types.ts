export interface Post {
    id: string;
    title: string;
    author: string;
    date: string;
    image: string;
    content: string;
    comments: Comment[];
}

export interface Comment {
    author: string;
    timestamp: string;
    content: string;
}

export type Posts = Post[];

export type NewComment = Comment & { postId: string };
