import {atom} from 'recoil';

const EmptyState = atom({
    key: 'emptyState',
    default: true
});

export default EmptyState;