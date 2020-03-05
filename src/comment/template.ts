import { CLASS_HEADER, ID_AUTHOR, ID_CONTENT, ID_TIMESTAMP } from './constants';

//language=HTML
export const template = `
<p class="${CLASS_HEADER}"><span id="${ID_AUTHOR}"></span> wrote on <span id="${ID_TIMESTAMP}"></span>:</p>
<p id="${ID_CONTENT}"></p>
`;
