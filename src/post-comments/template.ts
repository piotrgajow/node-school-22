import { ID_COMMENT_WRAPPER, ID_EDITOR, ID_EMPTY, TEXT_EMPTY } from './constants';
import { BlogCommentEditor } from '../comment-editor/index';

//language=HTML
export const template = `
<p id="${ID_EMPTY}">
    ${TEXT_EMPTY}
</p>
<div id="${ID_COMMENT_WRAPPER}"></div>
<${BlogCommentEditor.TAG} id="${ID_EDITOR}"></${BlogCommentEditor.TAG}>
`;
