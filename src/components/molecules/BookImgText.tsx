import { CircleCheckBox } from 'components/atoms/Boxes/CheckBox';
import BookCover from 'components/atoms/Imgs/BookCover';
import BookMakers from 'components/atoms/Texts/BookMakers';
import {BookTitle} from 'components/atoms/Texts/Titles';
import React from 'react';
import { useHistory } from 'react-router-dom';

export const RegisterBookImgText = ({item}:any) => {
    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            width:'230px',
            minHeight: '200px',
            alignItems: 'flex-start'
        }}>
            <BookCover src={item.thumbnail_image} width='100px' height='132px' margin='0 0' />
            <div style={{
                display:'flex',
                flexDirection:'column',
                // width:'240px',
                // minHeight: '200px',
                height:'50px',
                justifyContent: 'space-around',
                marginTop:'15px'
            }}>
                <BookTitle width='230px' title={item.title} fontSize='14px' />
                <BookMakers makers={`${item.authors}(지은이) ${item.translators ? ` ${item.translators}(옮긴이) `: ''}| ${item.publisher}`} fontSize='11px' /> 
            </div>
        </div>
    )
};

export const ArchiveBookImgText = ({index, value, isReturn, onClick, onCheck, item}:any) => {
    const history = useHistory();
    const bookInfo = item.book_info;

    const watchBookInfo = () => {
        history.push(`/saebyuk-web/book/info/item?title=${bookInfo.title}`, {
            item
        });
    };
    
    return ( 
        <div>
        <div className="a-book" style={{
            display:'flex',
            flexDirection:'column',
            width:'180px',
            minHeight: '200px',
            alignItems: 'flex-start',
            padding: '20px',
            zIndex: 2
        }}>
            <BookCover onClick={onClick === "watchBook" ? watchBookInfo : onClick} className="book-cover" src={bookInfo.thumbnail_image} width='100px' height='132px' margin='0 0' />
            
            {isReturn ? <CircleCheckBox onCheck={onCheck} index={index} value={value} /> : <></>}

            <div style={{
                display:'flex',
                flexDirection:'column',
                minHeight:'70px',
                justifyContent: 'space-around',
                marginTop:'15px'
            }}>
                <BookTitle width='180px' title={bookInfo.title} fontSize='14px' />
                <BookMakers makers={`${bookInfo.author}`} fontSize='11px' /> 
                <span style={{
                    fontSize: '8px',
                    color:item.borrow_available ?'#FABA00': "#5CB8E1"
                }}>{item.borrow_available ? "대출 가능" : '대출 중'}</span>
            </div>
        </div>
        </div>
    )
};