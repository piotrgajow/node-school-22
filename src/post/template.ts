import { CLASS_DETAILS, ID_AUTHOR, ID_DATE, ID_TITLE } from './constants';

//language=HTML
export const template = `
<h2 id="${ID_TITLE}"></h2>
<p class="${CLASS_DETAILS}">by <span id="${ID_AUTHOR}"></span> on <span id="${ID_DATE}"></span></p>
<slot>CONTENT</slot>
`;
