import { CLASS_HIDDEN, ID_COMMENT_WRAPPER, ID_EMPTY } from './constants';

//language=CSS
export const style = `
:host {
    margin: 20px;
}

.${CLASS_HIDDEN} {
    display: none;
}

#${ID_COMMENT_WRAPPER} {
    margin: 20px 0;
}

#${ID_EMPTY} {
    text-align: center;
    font-size: smaller;
}
`;
