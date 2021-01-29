import React from 'react';
import SearchResults from 'components/molecules/SearchResult';
import BookInfo from 'interfaces/BookInfo';
import axios from 'axios';
import SubTitle from 'components/atoms/Texts/SubTitle';
import TextInput from 'components/atoms/Inputs/TextInput';

const SearchNewBook = () => {
    const [query, serQuery] = React.useState<string>('');
    const [booksInfo, setBooksInfo] = React.useState<[BookInfo]|undefined>();
    
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
                //contents, authors, datetime, isbn, price, publisher, thumbnail, title, url, translators from api
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
    }, [query, searchBook]);

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
            {/* <input type="text" value={query} onClick={() => {
                document.getElementById("search-res-container")!.style.display = 'flex';
            }} placeholder='도서명 또는 저자 입력' onChange={(e) => serQuery(e.target.value)} style={{
                display:'flex',
                width:'290px',
                height:'35px',
                border:'2px solid #B3B3B3', 
                borderRadius: '10px',
                paddingLeft:'10px'
            }} />  */}
            <TextInput value={query} onClick={() => {
                document.getElementById("search-res-container")!.style.display = 'flex';
            }} placeholder='도서명 또는 저자 입력' onChange={(e:any) => serQuery(e.target.value)} />

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
        </div>
    )
};

export default SearchNewBook;