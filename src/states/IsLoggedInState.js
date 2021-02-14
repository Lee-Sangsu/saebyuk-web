import {atom, selector} from 'recoil';

export const IsLoggedInState = atom({
    key: 'isLoggedInState',
    default: window.sessionStorage.getItem('user')
});


export const isLoggedInSelector = selector({
    key: 'isLoggedInSelector',
    get: ({get}) => {
        const user = get(IsLoggedInState);
        if (user !== null) {
            return true;
        } else {
            return false;
        }
    }
});