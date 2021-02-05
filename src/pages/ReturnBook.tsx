import { ColumnFlex } from "styles/FlexStyles";
import React from 'react';
import axios from 'axios';

export const ReturnBook = () => {
    const [books, setBooks] = React.useState<Array<object>>([]);
    const [dataLoaded, setDataLoaded] = React.useState<boolean>(false);

    const getBooks = React.useCallback(() => {
        // newBook
        axios.get(`${process.env.REACT_APP_BASE_URL}/book/borrowed/${window.localStorage.getItem('user')}/`)
        .then((res:any) => {
            console.log(res);
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
        <div style={ColumnFlex}>
            <h1>반납 조지기</h1>
        </div>
    )
};
