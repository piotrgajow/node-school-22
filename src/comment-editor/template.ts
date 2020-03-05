import {
    ID_AUTHOR,
    ID_BUTTON,
    ID_CONTENT,
    TEXT_AUTHOR_PLACEHOLDER,
    TEXT_BUTTON,
    TEXT_CONTENT_PLACEHOLDER,
} from './constants';

//language=HTML
export const template = `
<textarea id="${ID_CONTENT}" placeholder="${TEXT_CONTENT_PLACEHOLDER}"></textarea>
<input id="${ID_AUTHOR}" type="text" placeholder="${TEXT_AUTHOR_PLACEHOLDER}"/>
<button id="${ID_BUTTON}" type="button">${TEXT_BUTTON}</button>
`;
