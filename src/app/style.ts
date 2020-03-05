import { BlogMenuItem } from '../menu-item/BlogMenuItem';
import { CLASS_CONTAINER, CLASS_MENU_CONTAINER, ID_COMMENTS, ID_MENU, ID_POST } from './constants';

//language=CSS
export const style = `
:host {
    display: block; 
    margin-bottom: 50px;
}

img {
    width: 99vw;
    height: 65vh;
}

.${CLASS_CONTAINER} {
    display: grid;
    grid-template-columns: 30% 30% 25% 15%;
    grid-template-rows: auto;
    grid-template-areas: 
        ". post . menu" 
        ". comments . menu";
}

#${ID_POST} {
    grid-area: post;
}

.${CLASS_MENU_CONTAINER} {
    grid-area: menu;
}

#${ID_COMMENTS} {
    grid-area: comments;
}

#${ID_MENU} {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    padding: 20px 0;
    max-height: 100vh;
}

${BlogMenuItem.TAG} {
    margin-bottom: 20px;
}
`;
