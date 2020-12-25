import React from 'react';
import NewBookState from 'states/NewBookState';
import {useSetRecoilState} from 'recoil';

const SearchResults = ({data}) => {
    const setNewBook = useSetRecoilState(NewBookState);
    const registerNewBook = () => {
        setNewBook(data);
        // 검색 결과 지우고, newBook 정보 띄우고, 따로 설정해줘야 하는 정보들 input 태그로 만들기
    };
    return (
        <div onClick={registerNewBook}>
            <h4>{data.title}</h4>
        </div>
    )
};

export default SearchResults;