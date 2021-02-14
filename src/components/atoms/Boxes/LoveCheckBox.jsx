import styled from 'styled-components';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { isLoggedInSelector } from 'states/IsLoggedInState';
import axios from 'axios';

const LoveBookBtn = styled.button`
    & {
        min-width: 150px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        border-width: 0;
        border-radius: 13px;
        margin-bottom: 10px;
        box-shadow: rgb(203 203 203) 2.5px 2.5px 7px;
    }
`;

export const LoveCheckBox = ({isbn}) => {
    const isLoggedIn = useRecoilValue(isLoggedInSelector);
    
    function loveThisBook() {
        if (isLoggedIn) {
            var willULove = window.confirm("이 책을 찜하시겠습니까?");
            if (willULove) {
                // sent api g_school_nickname, isbn
                axios.post(`${process.env.REACT_APP_BASE_URL}/book/love/`, {
                    headers:{
                        "Access-Control-Allow-Origin": '*',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    data: {
                        g_school_nickname: window.sessionStorage.getItem("user"),
                        isbn: isbn
                    }
                }).then(() => {
                    window.alert("찜하기 리스트에 성공적으로 등록되었습니다.");
                }).catch((err) => {
                    if (err.response.status === 400) {
                        window.alert("이미 찜하기 리스트에 있는 도서입니다.");
                    }
                })
            } else {
                return ;
            }
        } else {
            return ;
        }
    }

    return ( 
        <LoveBookBtn onClick={loveThisBook}>
            찜하기
        </LoveBookBtn>
        // <HeartIcon id={`heart`} onClick={loveThisBook} className={`heart-shape`} backgroundColor={backgroundColor}></HeartIcon>
    );
};


export const HeartIcon = styled.span`
    & {
        position: absolute;
        z-index: 3;
        width: 18px;
        height: 18px;
        margin-top: 27px;
        margin-left: 85px;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        background-color: ${props => props.backgroundColor};
    }
    &::after,
    &::before {
        position: absolute;
        width: 18px;
        height: 18px;
        content: "";
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -o-border-radius: 50%;
        border-radius: 50%;
        background-color: ${props => props.backgroundColor};
    }
    &::after {
        bottom: 0px;
        left: -8px;
    }
    &::before {
        top: -8px;
        right: 0px;
}`;
