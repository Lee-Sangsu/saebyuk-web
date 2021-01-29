import { Link } from "react-router-dom";
import React from 'react';

const NextorBackBtn = ({isEmpty, text, to}:any) => {
    return (
        <Link to={to} style={{
            width:'70px',
            height:'40px',
            backgroundColor:'black',
            opacity: isEmpty ? '0.5' : '1',
            cursor: isEmpty ? 'not-allowed' : 'pointer',
            color:'white',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            margin: '0 20px',
            textDecoration:'none',
            borderRadius:'7px',
            boxShadow: '3px 2.5px 2px #CBCBCB'
        }}>{text}</Link>
    );
};

export default NextorBackBtn;