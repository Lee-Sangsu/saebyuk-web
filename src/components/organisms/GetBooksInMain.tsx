import React from 'react';
import axios from 'axios';
import { ArchiveBookImgText } from 'components/molecules/BookImgText';
import { ColumnFlex, RowFlex } from 'styles/FlexStyles';
import 'styles/Hovers.css';
import { SubTitle } from 'components/atoms/Texts/Titles';

const GetBooksInMain = () => {
    const [books, setBooks] = React.useState<Array<object>>([]);
    const [dataLoaded, setDataLoaded] = React.useState<boolean>(false);

    const getBooks = React.useCallback(() => {
        // newBook
        axios.get(`${process.env.REACT_APP_BASE_URL}/book/main/`)
        .then((res:any) => {
            // console.log(typeof(res.data));
            // console.log(Array.isArray(res.data));
            res.data.forEach( (item:object) => {
                setBooks(prev => [...prev, item]);
            })
            setDataLoaded(true);
        })
        .catch((err) => console.log(err))
    }, []);

    React.useEffect(( ) => {
        getBooks();
    }, [getBooks])

    return (
        <div style={{
            ...ColumnFlex
        }}>
            <SubTitle fontSize="20px" fontWeight="bolder" margin="25px 0 0 10%" text="취향별 추천 도서" />
            <div className="books-container" style={{
                ...RowFlex,
                marginLeft:'10%',
                // Netflix Slide 넣어야 함.
                overflowY:'scroll'
            }}>
                {dataLoaded ? books.map((item, index) => <ArchiveBookImgText key={index} item={item} />) : <span>책 정보 불러오는 중 ...</span>}
            </div>

        </div>
    )
};

export default GetBooksInMain;
