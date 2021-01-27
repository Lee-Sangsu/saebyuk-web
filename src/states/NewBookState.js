import {atom} from 'recoil';

const NewBookState = atom({
    key: '',
    default: {
        isbn: '',
        title: '',
        author: '',
        thumbnail_image: '',
        publisher: '',
        page: '',
        published_date: '',
        keyword: '',
        subtitle: '',
        description: '',
        purchase_link: ''
    }
});

export default NewBookState;