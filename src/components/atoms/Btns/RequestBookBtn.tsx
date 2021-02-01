import React from 'react';

const RequestBookBtn = ({id, margin, text, onClick}:any) => {
    return (
        <button id={id} style={{
            width: '200px',
            height: '55px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: margin,
            backgroundColor: 'black',
            color: 'white',
            fontSize: '24px',
            borderWidth: '0',
            borderRadius: '13px',
            cursor:'pointer',
            boxShadow: 'rgb(203 203 203) 2px 2px 4px'
        }} onClick={onClick}>
            {text}
        </button>
    )
};

export default RequestBookBtn;