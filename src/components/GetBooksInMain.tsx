import React from 'react';
import BookInfo from '../interfaces/BookInfo';
import Cookies from 'js-cookie';

const GetBooksInMain = () => {
    const getBooks = () => {
        const csrftoken = Cookies.get('csrftoken');
        // newBook
        fetch('http://127.0.0.1:8000/book/main/', {
         method: 'GET',
          headers:{
            //   "Access-Control-Allow-Origin": '*',
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            //   'X-CSRFToken': csrftoken
          },
          mode: "no-cors"
        })
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
