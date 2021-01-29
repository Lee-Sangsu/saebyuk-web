import React from 'react';

const BookTitle = ({title, fontSize, width}:any) => {
    return (
        <span style={{
            fontSize:fontSize,
            color:'black',
            margin:'0',
            display:'flex',
            width:width,
            flexWrap:'wrap'
        }}>{title}</span>
    );
};
export default BookTitle;