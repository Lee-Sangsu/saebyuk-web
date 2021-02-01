import React from 'react';
import axios from 'axios';

const GetBooksInMain = () => {
    const getBooks = () => {
        // newBook
        axios.get(`${process.env.REACT_APP_BASE_URL}/book/main/`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err))
    };

    React.useEffect(( ) => {
        getBooks();
    }, [])

    return (
        <div>
            <span> 책을 불러오겠다. </span>
        </div>
    )
};

export default GetBooksInMain;
