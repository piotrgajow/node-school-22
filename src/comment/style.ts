import { CLASS_HEADER, ID_AUTHOR, ID_TIMESTAMP } from './constants';

//language=CSS
export const style = `
:host { 
    margin-top: 40px;
}

#${ID_AUTHOR},
#${ID_TIMESTAMP} {
    font-weight: bold;
}

.${CLASS_HEADER} {
    margin-left: 20px;
}
`;
