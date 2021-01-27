import React from 'react';
import SearchResults from 'components/atoms/SearchResult';
import BookInfo from '../interfaces/BookInfo';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";
import NewBookState from 'states/NewBookState';
import {useRecoilValue} from 'recoil';
import SubTitle from './atoms/SubTitle';

const RegisterNewBook = () => {
    const [query, serQuery] = React.useState<string>('');
    const [booksInfo, setBooksInfo] = React.useState<[BookInfo]|undefined>();
    const newBook = useRecoilValue(NewBookState);
    const history = useHistory();
    
    const searchBook = React.useCallback(() => {
        let id = 1;
        function getId() {
            const uniqueKey = id++;
            return uniqueKey;
        };
        const kakaoAuthKey = '23deffe47c27fae086a47cca4a65a532';
        // `${process.env.REACT_APP_KAKAO_REST_KEY}`;
        
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
        .then((res:any) => {
            // setBooksInfo([emp/]); // must make empty the state.
            const booksInformation = res.data.documents;
            
            var emptyArray:BookInfo[] = [];
            booksInformation.forEach((data:any) => {
                var year = data.datetime.slice(0,4);
                var month = data.datetime.slice(6,7);
                const isbn = data.isbn.split(" ");
                
                const bookObj:BookInfo = {
                    id: getId() ,
                    isbn: isbn[0],
                    title : data.title,
                    authors: data.authors.toString(),
                    translators: data.translators.toString(),
                    publisher: data.publisher,
                    published_date: `${year}년 ${month}월`,
                    thumbnail_image: data.thumbnail,
                    description: data.contents
                };
                
                emptyArray.push(bookObj);
                //contents, authors, datetime, isbn, price, publisher, thumbnail, title, url, translators
                
                /* Failed trying
                if (booksInfo === undefined) {
                    setBooksInfo([bookObj]);
                    console.log(booksInfo);
                } else {
                    // var emptyArray = [];
                    const newList = booksInfo.concat(bookObj);
                    // return newList;
                    console.log('닿았다');
                    setBooksInfo(newList as [BookInfo]); 
                }*/
            });
            if (emptyArray) {
                setBooksInfo(emptyArray as [BookInfo]);
            }
        })
        .catch(():void => {
            return;
        })
    }, [query]);

    React.useEffect(() => {
        searchBook();
    }, [query, searchBook])
    
    const registerBook = () => {
        const csrftoken = Cookies.get('csrftoken');
        // newBook
        axios.post(`${process.env.REACT_APP_BASE_URL}/book/register/new/`, {
          headers:{
              "Access-Control-Allow-Origin": '*',
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken
          },
          data: {
            isbn: newBook.isbn, 
            title: newBook.title,  
            author: newBook.author,  
            thumbnail_image: newBook.thumbnail_image, 
            publisher: newBook.publisher,   
            page: newBook.page,    
            published_date: newBook.published_date,   // 따로 설정해줘야함.
            keyword: newBook.keyword, 
            subtitle: newBook.subtitle,     // 따로 설정해줘야함.
            description: newBook.description, 
            purchase_link: newBook.purchase_link // 따로 설정해줘야함.
          }
        })
        .then((res) => {
            console.log(res);
            history.push('/')
        })
        .catch((err) => console.log(err))
    };


    return (
        <div style={{
            display:'flex',
            height: window.innerHeight,
            width: window.innerWidth*0.5,
            flexDirection:'column',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <div style={{
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h1>등록하기</h1>
                <h3>{`${window.localStorage.getItem('user')}님, 새로운 책을 등록할 수 있어요 ☺️`}</h3>
            </div>

            <SubTitle text="도서 검색" />
            <input type="text" value={query} onClick={() => {
                document.getElementById("search-res-container")!.style.display = 'flex';
            }} placeholder='도서명 또는 저자 입력' onChange={(e) => serQuery(e.target.value)} style={{
                display:'flex',
                width:'300px',
                height:'35px'
            }} /> 

            <SubTitle text="도서 목록" />

            <div id="search-res-container" style={{
                display:'none',
                flexDirection:'column',
                width:'300px',
                minHeight:'30px',
                maxHeight:'180px',
                overflowY:'scroll',
                border:'2px solid #B3B3B3', 
                borderRadius:'10px'
            }}>
                {(booksInfo === undefined || !booksInfo.length) ?
                <div>
                    <h4 style={{marginLeft:'30px'}}>검색 결과가 없습니다.</h4>
                </div>
                :
                booksInfo.map((data) => <SearchResults key={data.id} data={data} />)
                }
            </div>

            <button onClick={registerBook}>등록하기</button>
        </div>
    )
};

export default RegisterNewBook;