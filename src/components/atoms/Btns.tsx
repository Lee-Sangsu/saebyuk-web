import { Link, useHistory } from "react-router-dom";
import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {useSetRecoilState} from 'recoil';
import ProfileState from 'states/ProfileState';
import { BorRetBtnStyle, loginBtnStyle } from "styles/FlexStyles";
import InitializeState from 'states/InitializeState';

export const NextorBackBtn = ({isEmpty, text, to}:any) => {
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


export const RegisterNewBookBtn = ({newBook}:any) => {
    const history = useHistory();
    console.log(newBook);
    const genres = ["환경", "디자인", "마케팅", "페미니즘", "기타"];
    const keywords = ['유익한', '감동적인', '영감을 주는'];

    const onClick = () => {
        var newBookGenre = [];
        var newBookKeywords = [];
        // newBook
        for (var i=0; i < genres.length; i++){
            if(newBook.genre[i] === true) {
                newBookGenre.push(genres[i]);
            }
        }
        for (var x=0; x < keywords.length; x++){
            if(newBook.keyword[x] === true) {
                newBookKeywords.push(genres[x]);
            }
        }
        
        const csrftoken = Cookies.get('csrftoken');
        axios.post(`${process.env.REACT_APP_BASE_URL}/book/register/new/`, {
            headers:{
                "Access-Control-Allow-Origin": '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            data: {
                isbn: newBook.isbn, 
                title: newBook.title,  
                author: newBook.authors,  
                thumbnail_image: newBook.thumbnail_image, 
                publisher: newBook.publisher,   
                page: newBook.page as number,  
                published_date: newBook.published_date,   
                keyword: newBookKeywords, 
                genre: newBookGenre, 
                subtitle: newBook.subtitle, 
                description: newBook.description, 
                purchase_link: newBook.purchase_link ? newBook.purchase_link : ""
            }
        })
        .then((res) => {
            console.log(res);
            window.alert("등록되었노라");
            history.push('/');

            //aler를 주자.
        })
        .catch((err) => {
            if(err.response.status === 400) {
                window.alert("해당 isbn을 가진 책이 이미 등록되어 있습니다.")
            }
            console.log(err);
        })    
    };

    return (
        <button onClick={onClick} style={{
            width:'80px',
            height:'40px',
            backgroundColor:'black',
            color:'white',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            margin: '0 20px',
            textDecoration:'none',
            borderRadius:'7px',
            boxShadow: '3px 2.5px 2px #CBCBCB',
            cursor:'pointer',
            borderWidth:'0'
        }}>등록하기</button>
    );
};

export const RequestBookBtn = ({id, margin, text, onClick}:any) => {
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

declare global {
    interface Window {
        Kakao: any;
    }
}

export const SignInBtn = () =>{
  const history = useHistory();
  const setProfile = useSetRecoilState(ProfileState);
  const setInit = useSetRecoilState(InitializeState);

  const signInProcess = () => {
    axios.defaults.xsrfCookieName = "csrftoken"
    axios.defaults.xsrfHeaderName = "X-CSRFToken"
    window.Kakao.Auth.login({
      scope: 'profile',
      success: (res:any) => {
        console.log('first res:', res)
        window.Kakao.Auth.setAccessToken(res.access_token);
  
        const csrftoken = Cookies.get('csrftoken');
        axios.post(`${process.env.REACT_APP_BASE_URL}/account/login/kakao/`, {
          headers:{
              "Access-Control-Allow-Origin": '*',
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken
          },
          data: {
            access_token: res.access_token
          }
        })
        .then((res) => {
          // setStatus(res.status);
          if (res.status === 203) {
            console.log(res.data);
            setProfile(res.data); 
            history.push("/sign-up");
            setInit(true);
          } else if (res.status === 200) {
            console.log(res.data);
            window.localStorage.setItem('user', res.data.user.g_school_nickname);
            window.alert("login completed");
            window.localStorage.setItem('profile_img', res.data.user.profile_image);
            setInit(true);
          }
        })
        .catch((err) => console.log(err))
      }, 
      fail: (err:any) => {
        console.error(err);
      }
    });
  };

  return (
    <button style={loginBtnStyle} onClick={signInProcess}>로그인</button>
  );
};

export const SignOutBtn = () => {
    const history = useHistory();
    const setInit = useSetRecoilState(InitializeState);

    const onSignOutClick = () => {
        if (window.Kakao.Auth.getAccessToken()) {
            window.Kakao.Auth.logout(function() {
                window.localStorage.removeItem('user');
                history.push("/");
                setInit(true);
                return ;
            }); 
        } else {
            window.localStorage.removeItem('user');
            history.push("/");
            setInit(true);
        }
    };
    return (
        <button style={loginBtnStyle} onClick={onSignOutClick}>로그아웃</button>
    )
};
const returnNothing = ():void => {return ;};

export const SignUpBtn = ({isWritten, signUp}:any) => {
    return (
        <button style={{
            ...loginBtnStyle,
            backgroundColor: isWritten? '#333333' : '#DFDFDF',
            color: isWritten ? 'white' : '#C2C3CB',
            cursor: isWritten ? 'pointer': 'default',
            transition: '0.2s ease-in'
        }} onClick={isWritten ? signUp : returnNothing}>회원가입</button>
    )
};

export const BorrowBookBtn = ({borrowAvailable, onClick}: any) => {
    return (
        <button onClick={borrowAvailable ? onClick : returnNothing} style={{
            ...BorRetBtnStyle,
            backgroundColor: borrowAvailable? 'black' : '#DFDFDF',
            color: borrowAvailable ? 'white' : '#C2C3CB',
            cursor: borrowAvailable ? 'pointer' : 'default'
        }}>
            대출하기
        </button>
    );
};

export const ReturnBookBtn = ({returnBook, checkedBook}:any) => {
    return(
        <button style={{
            ...BorRetBtnStyle,
            backgroundColor: checkedBook? 'black' : '#DFDFDF',
            color: checkedBook ? 'white' : '#C2C3CB',
            cursor: checkedBook ? 'pointer' : 'default',
            width:'225px'
        }} onClick={returnBook}>
            반납하기
        </button>
    )
    
}