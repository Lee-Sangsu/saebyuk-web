import { SignInBtn } from 'components/atoms/Btns';
import React from 'react';
import { Link } from 'react-router-dom';
import { RowFlex } from 'styles/FlexStyles';

const Navigator = () => {

    const linkStyle:object = {
        textDecoration: 'none',
        fontSize: '15px',
        color: 'black'
    };
    
    const liStyle:object = {
        display:'inline-flex', 
        margin: '0 20px'
    };

    return (
        <ul style={{
            ...RowFlex,
            width: '100%',
            height: '85px',
            alignItems: 'center',
            margin: 0, 
            borderBottom: '2px solid black',
            paddingInlineStart: '3%'
        }} className="nav">
            <li style={liStyle}>
                <Link style={linkStyle} to="/">
                    새벽 로고
                </Link>
            </li>
            <li style={liStyle}>
                <Link style={linkStyle} to="/book/return/">
                    반납
                </Link>
            </li>
            <li style={liStyle}>
                <Link style={linkStyle} to="/sign-up">
                    내 서재
                </Link>
            </li>
            <li style={liStyle}>
                <Link style={linkStyle} to="/book/request-or-faq">
                    신청 및 문의
                </Link>
            </li>

            <li style={liStyle}>
                {window.localStorage.getItem('user') === null || window.localStorage.getItem('user') === undefined ? 
                <>
                <SignInBtn />
                {console.log(window.localStorage.getItem('user') )}
                </>
                :   
                <h5>로그아웃</h5>
                }
            </li>
        </ul>
    )
};

export default Navigator;