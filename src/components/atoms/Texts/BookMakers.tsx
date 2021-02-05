import React from 'react';

const BookMakers = ({fontWeight, makers, fontSize}:any) => {
    return (
        <h6 style={{
            fontSize: fontSize,
            margin: '5px 0',
            color: '#707070',
            lineHeight: '13px',
            fontWeight: fontWeight
        }}>{makers}</h6>
    );
};

export default BookMakers;