import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedInSelector, IsLoggedInState } from 'states/IsLoggedInState';
import { ColumnFlex, RowFlex } from 'styles/FlexStyles';
import { liStyle } from 'styles/TextStyles';
import 'styles/Hovers.css';
import axios from 'axios';
import { DjangoBook } from 'interfaces/BookInfo';
import { BooksCondition, LovedBooks } from 'components/organisms/MyLibraryOrgs';

export function MyLibrary() {
    const history = useHistory();
    const isLoggedIn = useRecoilValue(isLoggedInSelector);
    React.useEffect(() => {
        if (isLoggedIn === false) {
        history.goBack();
        window.alert("로그인이 필요합니다"); 
    }}, [history, isLoggedIn])

    const userNickname = useRecoilValue(IsLoggedInState);
    const [isLoveOption, setIsLoveOption] = React.useState(true);
    const [userBorrowedBooks, setBooks] = React.useState<Array<DjangoBook>>([]);
    const [dataLoaded, setDataLoaded] = React.useState<boolean>(false);

    const getBooks = React.useCallback(() => {
        // newBook
        if (userNickname === null) {
            return ;
        } else {
            axios.get(`${process.env.REACT_APP_BASE_URL}/book/present-condition/${userNickname}/`)
            .then(({data}) => {
                // console.log({data});
                var newBookArr:Array<DjangoBook> = [];
                data.forEach( (item:DjangoBook) => {
                    // console.log(item)
                    newBookArr.push(item)
                })
                setBooks(newBookArr);
                setDataLoaded(true);
            })
            .catch((err) => console.log(err))
        }
    }, [userNickname]);
    

    React.useEffect(() => {
        getBooks();
    }, [getBooks])


    const moveUnderLine = ({target: {id}}:any) => {
        if (id === "left-el"){
            document.getElementById("underline")!.style.width ='59.58px';
            document.getElementById("underline")!.style.marginInlineStart ='1%';
            setIsLoveOption(true);
        } else if (id === "right-el") {
            document.getElementById("underline")!.style.width ='124.55px';
            document.getElementById("underline")!.style.marginInlineStart ='calc(124.45px - 2%)';
            setIsLoveOption(false);
        }
    };

    const getMonthAndDate = (date:Date): string => {
        const borrowedMonth = new Date(date);
        return `${borrowedMonth.getMonth()+1}/${borrowedMonth.getDate()}`;
    };
    
    const getNextWeeksMonthAndDate = (date:Date): string => {
        const borrowedMonth = new Date(date);
        borrowedMonth.setDate(borrowedMonth.getDate() + 7);
        return `${borrowedMonth.getMonth()+1}/${borrowedMonth.getDate()}`;
    };
    return (
        <div style={{
            ...ColumnFlex,
            width: '90%',
            padding: '40px 5%'
        }}>
            <div style={{
                ...RowFlex,
                width: "250px",
                justifyContent: 'space-between',
                flexWrap: 'wrap'
            }}>
                <li id="left-el" onClick={moveUnderLine} style={{...liStyle, cursor:'pointer'}}>찜한 도서</li>
                <li id="right-el" onClick={moveUnderLine} style={{...liStyle, cursor:'pointer'}}>대출/반납 현황 조회</li>
                <hr id="underline" />
            </div>
            {isLoveOption ? <LovedBooks />
            : 
            <BooksCondition dataLoaded={dataLoaded} userBorrowedBooks={userBorrowedBooks} liStyle={liStyle} getMonthAndDate={getMonthAndDate} getNextWeeksMonthAndDate={getNextWeeksMonthAndDate} /> }
        </div>
    )
};