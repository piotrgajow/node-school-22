import { CLASS_DETAILS, ID_AUTHOR, ID_DATE, ID_TITLE, ID_WRAPPER } from './constants';

//language=HTML
export const template = `
<p id="${ID_WRAPPER}">
    <span id="${ID_TITLE}"></span>
    <br/>
    <span id="${ID_DATE}" class="${CLASS_DETAILS}"></span>
    <br/>
    <span id="${ID_AUTHOR}" class="${CLASS_DETAILS}"></span>
</p>
`;
