import { SignInBtn, SignOutBtn } from 'components/atoms/Btns';
import { SearchIcon } from 'components/atoms/Icons';
import { UserProfile } from 'components/atoms/Imgs/UserProfile';
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
        margin: '0 2%'
    };

    return (
        <ul style={{
            ...RowFlex,
            width: '94%',
            height: '85px',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 0, 
            marginBlock: 0,
            padding: '0 3%',
            borderBottom: '2px solid black'
        }} className="nav">
            <div style={{
                ...RowFlex,
                justifyContent: 'space-around',
                // width: '40%'
                minWidth: '470px'
                // position:'absolute'
            }}>
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
                    <SearchIcon />
                </li>
            </div>

            <li style={liStyle}>
                {window.localStorage.getItem('user') === null || window.localStorage.getItem('user') === undefined ? 
                <>
                <SignInBtn />
                {console.log(window.localStorage.getItem('user') )}
                </>
                :   
                <div style={{...RowFlex, alignItems: 'center'}}>
                    <UserProfile />
                    <SignOutBtn />
                </div>
                }
            </li>
        </ul>
    )
};

export default Navigator;