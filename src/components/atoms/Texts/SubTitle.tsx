import React from 'react';

const SubTitle = ({margin, text}:any) => {
    return (
        <span style={{
            fontSize:'15px',
            textAlign:'start',
            width: '300px',
            margin: margin
        }}>
            {text}
        </span>
    )
};

export default SubTitle;