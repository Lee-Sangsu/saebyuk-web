import React from 'react';
import NewBookState from 'states/NewBookState';
import {useSetRecoilState} from 'recoil';
import 'styles/Hovers.css';

const SearchResults = ({data}:any) => {
    console.log(data);

    
    data = JSON.parse(JSON.stringify(data));
    
    var publishedDate:string = data.published_date;
    
    if (publishedDate && data.published_date[6] === '0'){
        publishedDate = publishedDate.split(" ")[0]
    }
    
    const setNewBook = useSetRecoilState(NewBookState);
    const registerNewBook = () => {
        setNewBook(data);
        // 검색 결과 지우고, newBook 정보 띄우고, 따로 설정해줘야 하는 정보들 input 태그로 만들기
        
    };
    if(data.isbn === ""){
        return <></>;
    }
    return (
        <div id="search-res-box" style={{
             cursor:'pointer', display:'flex', justifyContent: 'flex-start', alignItems:'center', height: '85px', borderBottom: '2px solid #B3B3B3', padding: '0 15px'
        }} onClick={registerNewBook}>
            <img src={data.thumbnail_image !== "" ? `${data.thumbnail_image}`: require('assets/missing-book.png').default} alt={`책 ${data.title}의 표지`} style={{
                height:'55px',
                width:'40px',
                margin:'15px 0',
                marginRight:'15px',
                borderWidth:'1px',
                borderStyle:"solid",
                borderColor:'#707070',
                borderTopRightRadius:'10px',
                borderBottomRightRadius:'10px'
            }}/>
            <div>
                <h4 style={{
                    margin:'0',
                    fontSize:'12px'
                }}>{data.title}</h4>
                <h6 style={{
                    margin:'5px 0', color:'#707070', lineHeight:'13px'
                }}>
                    {`${data.authors}(지은이)`}{data.translators ? `, ${data.translators}(옮긴이) `: ' '}|{` ${data.publisher} `}|{` ${publishedDate}`}
                </h6>
            </div>
        </div>
    )
};
export default SearchResults;