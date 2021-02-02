import BookCover from 'components/atoms/Imgs/BookCover';
import BookMakers from 'components/atoms/Texts/BookMakers';
import BookTitle from 'components/atoms/Texts/BookTitle';
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

export const ArchiveBookImgText = ({item}:any) => {
    const history = useHistory();
    const watchBookInfo = () => {
        history.push(`/book/info/item?id=${item.title}`, {
            item
        });
    }
    return ( 
        <div className="a-book" style={{
            display:'flex',
            flexDirection:'column',
            width:'180px',
            minHeight: '200px',
            alignItems: 'flex-start',
            padding: '20px'
        }}>
            <BookCover onClick={watchBookInfo} className="book-cover" src={item.thumbnail_image} width='100px' height='132px' margin='0 0' />
            <div style={{
                display:'flex',
                flexDirection:'column',
                height:'50px',
                justifyContent: 'space-around',
                marginTop:'15px'
            }}>
                <BookTitle width='220px' title={item.title} fontSize='14px' />
                <BookMakers makers={`${item.author}`} fontSize='11px' /> 
                <span style={{
                    fontSize: '8px',
                    color:'#FABA00'
                }}>{item.book.borrow_available ? "대출 가능" : '대출 중'}</span>
            </div>
        </div>
    )
};