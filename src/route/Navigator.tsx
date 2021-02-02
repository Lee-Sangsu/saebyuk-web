import { SignInBtn } from 'components/atoms/Btns';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigator = () => {

    return (
        <ul className="nav">
            <li>
                <Link to="/">
                    새벽 로고
                </Link>
            </li>
            <li>
                <Link to="/">
                    대출
                </Link>
            </li>
            <li>
                <Link to="/sign-up">
                    내 서재
                </Link>
            </li>
            <li>
                <Link to="/book/request-or-faq">
                    신청 및 문의
                </Link>
            </li>

            <li>
                {window.localStorage.getItem('user') === null || window.localStorage.getItem('user') === undefined ? 
                <SignInBtn />
                :   
                <h1>로그아웃</h1>
                }
            </li>
        </ul>
    )
};

export default Navigator;