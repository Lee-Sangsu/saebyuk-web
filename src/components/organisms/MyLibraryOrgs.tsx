import BookMakers from "components/atoms/Texts/BookMakers";
import { ColoredBookTitle } from "components/atoms/Texts/Titles";
import { DjangoBook } from "interfaces/BookInfo";
import React from "react";
import { RowFlex } from "styles/FlexStyles"
import { getBooksConditionColor } from "styles/GetRandomColor";

export const LovedBooks = () => {
    return (
        <div style={{
            ...RowFlex,
            width: '100%', justifyContent: 'center',
            height: '300px', alignItems: 'center',
        }}>
            <h1>찜한 도서s</h1>
        </div>
    )
};

export const BooksCondition = ({dataLoaded, userBorrowedBooks, liStyle, getMonthAndDate, getNextWeeksMonthAndDate }: any) => {
    return (
        <div>
                <div style={{...RowFlex, width: "100%", flexWrap: 'wrap', marginTop: '30px'}}>
                    <div style={{...RowFlex, width: "100%"}}>
                        <span style={{color: '#707070', fontSize:'14px', marginLeft:'5px',width:"calc(50% - 5px)"}}>{`${dataLoaded ? userBorrowedBooks.length : 0}권의 도서`}</span>
                        <div style={{
                            ...RowFlex,
                            width: "50%",
                            justifyContent: 'space-around'
                        }}>
                             <li style={liStyle}>대출일</li>
                             <li style={liStyle}>반납일</li>
                             <li style={liStyle}>비고</li>
                        </div>
                    </div>
                    {dataLoaded ? userBorrowedBooks.map((item:DjangoBook, index:number) => 
                        // <h6>{`item:${JSON.stringify(item.book)}`}</h6>
                        <div key={index} style={{...RowFlex, width: "100%"}}>
                            <div style={{marginLeft:'5px',width:"calc(50% - 5px)", padding: '30px 0'}}>
                                <ColoredBookTitle color={getBooksConditionColor(item.is_overdue, item.returned_at)} title={item.book.book_info.title} />
                                <BookMakers fontSize="15px" makers={`${item.book.book_info.author}(지은이) | ${item.book.book_info.publisher} | ${item.book.book_info.published_date}`} fontWeight="400" />
                            </div>
                            <div style={{
                                ...RowFlex,
                                width: "50%",
                                justifyContent: 'space-around',
                                alignItems: 'center'
                            }}>
                                <li style={liStyle}>{`${getMonthAndDate(item.borrowed_at)}`}</li>
                                {/* need to convet string to date */}
                                {console.log(typeof(item.borrowed_at) )}
                                <li style={{
                                    ...liStyle,
                                    color: item.returned_at ? "black" : "#BBBBBB"
                                }}>{item.returned_at ? getMonthAndDate(item.returned_at) : getNextWeeksMonthAndDate(item.borrowed_at)}</li>
                                <li style={{
                                    ...liStyle,
                                    color: item.is_overdue ? '#FF0000' : 'black'
                                }}>{item.is_overdue ? '연체' : '-'}</li>
                            </div>
                        </div>
                    ):<></>}
                </div>
            </div>
    )
}