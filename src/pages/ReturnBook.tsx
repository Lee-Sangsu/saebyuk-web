import { ColumnFlex, RowFlex } from "styles/FlexStyles";
import React from 'react';
import axios from 'axios';
import { ArchiveBookImgText } from 'components/molecules/BookImgText';
import { SubTitle } from "components/atoms/Texts/Titles";
import { ReturnBookBtn } from "components/atoms/Btns";
import { useHistory } from "react-router-dom";

interface BookModel{
    isbn:string,
    borrow_available: boolean,
    registered_date: Date,
    book_info: object
}

interface Book{
    book:BookModel,
    borrowed_at: string,
    is_overdue: boolean
}
function replaceItemAtIndex(arr:any, index:number, newValue:boolean) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

  
export const ReturnBook = () => {
    const history = useHistory();
    React.useEffect(() => {
        if (window.localStorage.getItem('user') === null || window.localStorage.getItem('user') ===  undefined) {
        history.goBack();
        window.alert("로그인이 필요합니다"); 
    }}, [history])

    const [books, setBooks] = React.useState<Array<Book>>([]);
    const [dataLoaded, setDataLoaded] = React.useState<boolean>(false);
    const [check, setCheck] = React.useState<Array<boolean>>([]);
    const [checkedAnyBook, setCheckedAnyBook] = React.useState<boolean>(false);


    const getBooks = React.useCallback(() => {
        // newBook
        if (window.localStorage.getItem('user') === null) {
            return ;
        } else {
            axios.get(`${process.env.REACT_APP_BASE_URL}/book/borrowed/${window.localStorage.getItem('user')}/`)
            .then((res:any) => {
                console.log(res);
                // console.log(Array.isArray(res.data));
                res.data.forEach( (item:Book) => {
                    setBooks(prev => [...prev, item]);
                    setCheck(prev => [...prev, false]);
                })
                setDataLoaded(true);
            })
            .catch((err) => console.log(err))
        }
    }, []);

    React.useEffect(( ) => {
        getBooks();
    }, [getBooks])

    React.useEffect(() => {
        if (check.indexOf(true) === -1) {
            setCheckedAnyBook(false);
        } else {
            setCheckedAnyBook(true);
        }
    }, [check])

    function checkThisBook(event:any) {
        const checkedInput = Number(event.target.name);
        const newList = replaceItemAtIndex(check, checkedInput, !check[checkedInput])
        setCheck(newList);
    };

    // array isbn , g-_school_nickname가지고 put.
    function returnBook() {
        var isbnArray = [];
        for(var i=0; i<check.length; i++){
            if(check[i] === true){
                isbnArray.push(books[i].book.isbn);
            }
        }
        axios.put(`${process.env.REACT_APP_BASE_URL}/book/return/`, {
            data:{
                isbn: isbnArray,
                g_school_nickname: window.localStorage.getItem('user')
            }
        }).then((res) => {
            window.alert(`성공적으로 반납되었습니다.`);
            history.push('/');
        }).catch(e => console.error(e))
    }

    return (
        <div style={ColumnFlex}>
            <SubTitle fontSize="20px" fontWeight="bolder" margin="25px 0 0 10%" text="대출중인 도서" />
            <span style={{margin:"0 0 0 10%"}}>{`${dataLoaded ? books.length : 0}권의 도서`}</span>
            <div className="books-container" style={{
                ...RowFlex,
                marginLeft:'10%',
                // Netflix Slide 넣어야 함.
                overflowY:'scroll'
            }}>
                {dataLoaded ? books.map((item, index) => 
                    <ArchiveBookImgText key={index} index={index} isReturn={true} value={check[index]} onCheck={checkThisBook} item={item.book} />
                ) : <span>책 정보 불러오는 중 ...</span>}
            </div>
            <div style={{
                ...RowFlex,
                width:'90%',
                justifyContent: 'flex-end'
            }}>
                <ReturnBookBtn returnBook={returnBook} checkedBook={checkedAnyBook} />
            </div>
        </div>
    )
};
