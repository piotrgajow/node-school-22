import { BlogPost } from '../post/index';
import { BlogPostComments } from '../post-comments/index';
import { CLASS_CONTAINER, CLASS_MENU_CONTAINER, ID_COMMENTS, ID_IMAGE, ID_MENU, ID_POST } from './constants';

//language=HTML
export const template = `
<img id="${ID_IMAGE}"/>
<div class="${CLASS_CONTAINER}">
    <${BlogPost.TAG} id="${ID_POST}"></${BlogPost.TAG}>
    <${BlogPostComments.TAG} id="${ID_COMMENTS}"></${BlogPostComments.TAG}>
    <div class="${CLASS_MENU_CONTAINER}">
        <div id="${ID_MENU}"></div>
    </div>
</div>
`;
