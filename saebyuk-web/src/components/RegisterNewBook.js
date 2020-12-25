import axios from 'axios';
import React from 'react';
import SearchResults from 'components/SearchResults';
import NewBookState from 'states/NewBookState';
import {useRecoilValue} from 'recoil';

let id = 1;
  
function getId() {
   return id++;
};

const RegisterNewBook = () => {
    const kakaoAuthKey = '23deffe47c27fae086a47cca4a65a532';
    const [query, serQuery] = React.useState('');
    const [booksInfo, setBooksInfo] = React.useState([]);
    const newBook = useRecoilValue(NewBookState);

    const searchBook = ( ) => {
        axios.get('https://dapi.kakao.com/v3/search/book?target=title', {
            headers : {
                'Authorization': `KakaoAK ${kakaoAuthKey}`,
                'content-type': 'application/x-www-form-urlencoded'
            },
            params : {
                size: 20,
                query: query
            } 
        })
        .then((res) => {
            setBooksInfo([]);
            const booksInformation = res.data.documents;
            booksInformation.forEach(data => {
                var year = data.datetime.slice(0,4);
                var month = data.datetime.slice(6,7);
                const isbn = data.isbn.split(" ");

                const bookObj = {
                    id: getId(),
                    isbn: isbn[0],
                    title : data.title,
                    authors: data.authors.toString(),
                    translators: data.translators.toString(),
                    publisher: data.publisher,
                    published_date: `${year}년 ${month}월`,
                    thumbnail_image: data.thumbnail,
                    description: data.contents
                };
                console.log(bookObj);                
                setBooksInfo((prev) => [...prev, bookObj]); //contents, authors, datetime, isbn, price, publisher, thumbnail, title, url, translators
            });
        })
        .catch(e => console.error(e))

    };

    const registerBook = () => {
        // newBook
        axios.post('http://127.0.0.1:8000/account/sign-up/kakao/', {
          headers:{
              "Access-Control-Allow-Origin": '*',
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken
          },
          data: {
            isbn: newBook.something, 
            title: newBook.something,  
            author: newBook.something,  
            thumbnail_image: newBook.something, 
            publisher: newBook.something,   
            page: newBook.something,    
            published_date: newBook.something,   // 따로 설정해줘야함.
            keyword: newBook.something, 
            subtitle: newBook.something,     // 따로 설정해줘야함.
            description: newBook.something, 
            purchase_link: newBook.something // 따로 설정해줘야함.
          }
        })
        .then((res) => {
            console.log(res);
            history.push('/')
        })
        .catch((err) => console.log(err))
    }

    return (
        <div>
            <input type="text" value={query} placeholder='도서명 또는 저자 입력' onChange={(e) => serQuery(e.target.value)} /> 
            <button onClick={searchBook}>검색</button>
            <div>
                {booksInfo.map((data) => <SearchResults key={data.id} data={data} />)}
            </div>

            <button onClick={registerBook}>등록하기</button>
        </div>
    )
};

export default RegisterNewBook;