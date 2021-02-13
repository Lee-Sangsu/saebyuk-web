import { RowFlex } from "styles/FlexStyles";
import 'styles/SearchIcon.css';
import { BottomLineTextInput } from "./TextInputs";
import React from 'react';
import axios from "axios";
import { DjangoBookObj } from 'interfaces/BookInfo';
import {DjangoSearchResult} from "components/molecules/SearchResult";

export const SearchIcon = () => {
    const [query, setQuery] = React.useState("");
    const [searchBarOpened, setSearchBarOpened] = React.useState(false);;
    const [books, setBooks] = React.useState<Array<DjangoBookObj>>([]);
    
    const searchBook = React.useCallback(() => {        
        axios.get(`${process.env.REACT_APP_BASE_URL}/book/search/${query}/`)
        .then((res:any) => {
            var emptyArray:Array<DjangoBookObj> = [];
            res.data.forEach((item: DjangoBookObj) => {
                emptyArray.push(item);
            })
            setBooks(emptyArray);
        })
        .catch(():void => {
            return;
        })
    }, [query]);

    React.useEffect(() => {
        if (query)
        searchBook();
    }, [query, searchBook]);

    function onBlurSearching() {
        if (searchBarOpened && query) {
            // open search result container book 
            // console.log("here 1")
            // console.log(query.length)
            return ;
        } else if (searchBarOpened === false) {
            document.getElementById('search-book-our-api')!.style.width = '290px';
            document.getElementById('search-book-our-api')!.style.paddingLeft = '10px';
            setSearchBarOpened(true);
            document.getElementById('search-container')!.style.width = '330px';
            document.getElementById('search-container')!.style.flexWrap = 'wrap';
        } else {
            // console.log("here 2")
            document.getElementById('search-container')!.style.width = '22px';
            document.getElementById('search-container')!.style.flexWrap = 'no-wrap';
            document.getElementById('search-book-our-api')!.style.width = '0';
            document.getElementById('search-book-our-api')!.style.padding = '0';
            setSearchBarOpened(false);
        }
    }

    React.useEffect(() => {
        if (searchBarOpened && query) {
            document.getElementById('search-res-container')!.style.display = 'flex';
        } else {
            document.getElementById('search-res-container')!.style.display = 'none';
        }
    }, [query, searchBarOpened])

    return (
        <div id="search-container" style={{
            ...RowFlex, justifyContent: 'flex-end', position: 'absolute', alignItems: 'flex-start', transition: '0.5s ease', overflowY:"revert", height: '40px', zIndex:3
        }}>
            <BottomLineTextInput id="search-book-our-api" value={query} onChange={(e:any) => setQuery(e.target.value)} placeholder="검색어를 입력하세요" />
            <div  onMouseDown={onBlurSearching} className="search-icon-div" style={{
                ...RowFlex,
                width: '22px',
                height: '22px'
            }}>
                <i className="circle" />
                <i className="bar" />
            </div>
            <div id="search-res-container" style={{
                display:'none',
                flexDirection:'column',
                width:'300px',
                minHeight:'30px',
                maxHeight:'205px',
                backgroundColor: 'white',
                marginRight: '20px',
                overflowY:'scroll',
                border:'2px solid #B3B3B3', 
                borderRadius:'10px'
            }}>
                {(books === undefined || !books.length) ?
                <div>
                    <h4 style={{marginLeft:'30px'}}>검색 결과가 없습니다.</h4>
                </div>
                :
                books.map((data, index) => <DjangoSearchResult key={index} data={data} onClick={() => {
                    setQuery("");
                    setSearchBarOpened(false);
                    setBooks([]);
                }} />)
                }
            </div>
        </div>
    );
};
