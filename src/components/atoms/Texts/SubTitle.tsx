import React from 'react';

const SubTitle = ({text}:any) => {
    return (
        <span style={{
            fontSize:'15px',
            textAlign:'start',
            width: '300px',
            margin: '5px 0'
        }}>
            {text}
        </span>
    )
};

export default SubTitle;