import React from 'react';
import { useHistory } from "react-router-dom";
import {useSetRecoilState} from 'recoil';
import ProfileState from 'states/ProfileState';
import Cookies from 'js-cookie';
import axios from 'axios';

declare global {
  interface Window {
    Kakao: any;
  }
}

const SignInBtn = () =>{
  const history = useHistory();
  const setProfile = useSetRecoilState(ProfileState);

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
          } else if (res.status === 200) {
            console.log(res.data);
            window.localStorage.setItem('user', res.data.user.g_school_nickname);
            window.alert("login completed");
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
    <button onClick={signInProcess}>로그인</button>
  );
}

export default SignInBtn;