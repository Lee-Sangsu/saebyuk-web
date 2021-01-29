import React from 'react';

const AlertTitle = ({text}:any) => {
    return (<>
        <span style={{
            fontSize:'20px',
            textAlign:'center'
        }}>{`${text}`}</span>
    </>)
};

export default AlertTitle;