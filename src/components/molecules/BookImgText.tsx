import BookCover from 'components/atoms/Imgs/BookCover';
import BookMakers from 'components/atoms/Texts/BookMakers';
import BookTitle from 'components/atoms/Texts/BookTitle';
import React from 'react';

const BookImgText = ({item}:any) => {
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

export default BookImgText;