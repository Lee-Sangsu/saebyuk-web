import { SignInBtn, SignOutBtn } from 'components/atoms/Btns';
import { SearchIcon } from 'components/atoms/Icons';
import { UserProfile } from 'components/atoms/Imgs/UserProfile';
import React from 'react';
import { Link } from 'react-router-dom';
import { RowFlex } from 'styles/FlexStyles';
import {useRecoilValue} from 'recoil';
import { isLoggedInSelector } from 'states/IsLoggedInState';
import { linkStyle, liStyle } from 'styles/TextStyles';

const Navigator = () => {
    const userLoggedIn = useRecoilValue(isLoggedInSelector);

    const newLiStyle = {
        ...liStyle,
        margin: '0 5%'
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
                justifyContent: 'flex-start',
                minWidth: '500px'
            }}>
                <li style={newLiStyle}>
                    <Link style={linkStyle} to="/saebyuk-web/">
                        <img style={{width:'80px', height:'auto'}} src={require('assets/saebyuk-logo.png').default} alt="새벽" />
                    </Link>
                </li>
                <li style={newLiStyle}>
                    <Link style={{...linkStyle, display:'flex', alignItems: 'center' }} to="/saebyuk-web/book/return/">
                        반납
                    </Link>
                </li>
                <li style={newLiStyle}>
                    <Link style={{...linkStyle, display:'flex', alignItems: 'center' }} to="/saebyuk-web/my-library">
                        내 서재
                    </Link>
                </li>
                <li style={newLiStyle}>
                    <Link style={{...linkStyle, display:'flex', alignItems: 'center' }} to="/saebyuk-web/book/request-or-faq">
                        신청 및 문의
                    </Link>
                </li>
                <li style={{...newLiStyle, margin: "0 3%"}}>
                    <Link style={{...linkStyle, display:'flex', alignItems: 'center' }} to="/saebyuk-web/admin">
                        관리
                    </Link>
                </li>
                <li style={{...liStyle, alignItems: 'center'}}>
                    <SearchIcon />
                </li>
            </div>

            <li style={liStyle}>
                {userLoggedIn ? 
                <div style={{...RowFlex, alignItems: 'center'}}>
                    <UserProfile />
                    <SignOutBtn />
                </div>
                :   
                <SignInBtn />
                }
            </li>
        </ul>
    )
};

export default Navigator;