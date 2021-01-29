import React from 'react';

const BookCover = ({src, width, height, margin}:any) => {
    return (
        <img src={src !== "" ? src : require('assets/missing-book.png').default} alt="표지 사진" style={{
            height:height,
            width:width,
            margin: margin,
            marginRight: '15px',
            border: '1px solid #707070',
            borderTopRightRadius:'10px',
            borderBottomRightRadius:'10px'
        }} />
    )
};

export default BookCover;